import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET(request) {
  console.log('API Route Hit!');
  console.log('API Key exists:', !!process.env.GOOGLE_CALENDAR_API_KEY);
  console.log('Calendar ID:', process.env.GOOGLE_CALENDAR_ID);
  
  try {
    const calendar = google.calendar({
      version: 'v3',
      auth: process.env.GOOGLE_CALENDAR_API_KEY,
    });

    const { searchParams } = new URL(request.url);
    const timeMin = searchParams.get('timeMin') || new Date().toISOString();
    const timeMax = searchParams.get('timeMax');

    console.log('Fetching events from', timeMin, 'to', timeMax);

    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: timeMin,
      timeMax: timeMax,
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
    });

    console.log('Found', response.data.items?.length || 0, 'events');

    const events = response.data.items.map(event => ({
      id: event.id,
      title: event.summary,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      date: (event.start.dateTime || event.start.date).split('T')[0],
      description: event.description || '',
      location: event.location || '',
    }));

    return NextResponse.json({ events });
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