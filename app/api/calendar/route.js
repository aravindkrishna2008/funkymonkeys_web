import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const CACHE_TTL_MS = 5 * 60 * 1000;
const calendarCache = new Map();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const timeMin = searchParams.get('timeMin') || new Date().toISOString();
    const timeMax = searchParams.get('timeMax');
    const cacheKey = `${timeMin}:${timeMax}`;
    const cached = calendarCache.get(cacheKey);

    if (cached && Date.now() - cached.createdAt < CACHE_TTL_MS) {
      return NextResponse.json(
        { events: cached.events },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
          },
        }
      );
    }

    const calendar = google.calendar({
      version: 'v3',
      auth: process.env.GOOGLE_CALENDAR_API_KEY,
    });

    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: timeMin,
      timeMax: timeMax,
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = (response.data.items || []).map(event => ({
      id: event.id,
      title: event.summary,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      date: (event.start.dateTime || event.start.date).split('T')[0],
      description: event.description || '',
      location: event.location || '',
    }));

    calendarCache.set(cacheKey, {
      createdAt: Date.now(),
      events,
    });

    return NextResponse.json(
      { events },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      }
    );
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch calendar events', 
        details: error.message,
        code: error.code 
      },
      { status: 500 }
    );
  }
}
