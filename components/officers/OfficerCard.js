"use client";
import { useRef, useState } from "react";

const OfficerCard = ({ name, position }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 15 degrees)
    // If mouse is on left (x < centerX), rotateY should be negative (tilt left)
    const rotateX = ((y - centerY) / centerY) * -15; // Invert X for natural tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    // Set CSS variables for transform to avoid full React re-renders
    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);

    // Update cursor position for the glare
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      // Reset rotation
      cardRef.current.style.setProperty("--rotateX", `0deg`);
      cardRef.current.style.setProperty("--rotateY", `0deg`);
    }
  };

  return (
    <div
      className="perspective-1000 w-full flex justify-center items-center hover:scale-105 duration-200"
      style={{ perspective: "1000px" }} // Essential for 3D effect
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // Base Transition is for the 'transform' returning to 0 when hover ends.
        // During hover, we want instant updates, so we override transition in CSS or keep it fast.
        className={`
          relative flex flex-col justify-end 
          w-full aspect-[5/6] 
          border-4 border-[#FFDA15] rounded-xl 
          overflow-hidden bg-white/5 backdrop-blur-sm
          transition-transform duration-200 ease-out will-change-transform
          cursor-pointer select-none
        `}
        style={{
          transform: `rotateX(var(--rotateX, 0deg)) rotateY(var(--rotateY, 0deg)) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* --- Card Content --- */}
        <div className="relative z-10 p-[16px] w-full h-full flex flex-col justify-end pointer-events-none">
          <h1 className="font-medium text-[24px] leading-tight text-gray-800">
            {name}
          </h1>
          <h2 className="text-[20px] text-gray-600">{position}</h2>
        </div>

        <div
          style={{ filter: "blur(40px)" }}
          className="w-[84px] h-[100px] bg-[#FFD600] rounded-full absolute top-[10%] right-[10%] opacity-80"
        />
        <div
          style={{ filter: "blur(40px)" }}
          className="w-[84px] h-[100px] bg-[#FFDE9E] rounded-full absolute top-[20%] right-[50%] opacity-80"
        />
        <div
          style={{ filter: "blur(40px)" }}
          className="w-[84px] h-[100px] bg-[#FFD68E] rotate-45 rounded-full absolute top-[50%] right-[15%] opacity-80"
        />

        {/* --- Chromatic/Holographic Glare --- */}
        {/* This layer handles the rainbow reflection */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            mixBlendMode: "soft-light", // Gives it the metallic sheen look
            background: `
                    radial-gradient(
                        farthest-corner circle at ${cursorPos.x}px ${cursorPos.y}px,
                        rgba(255, 255, 255, 0.8) 0%,
                        rgba(200, 200, 200, 0.4) 20%,
                        transparent 80%
                    )
                `,
          }}
        />

        {/* This layer handles the color spectrum (Prism effect) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.4 : 0,
            mixBlendMode: "color-dodge",
            background: `
                    conic-gradient(
                        from 180deg at 50% 50%, 
                        #ff0000, 
                        #ffd700, 
                        #00ff00, 
                        #00ffff, 
                        #0000ff, 
                        #ff00ff, 
                        #ff0000
                    )
                `,
            // This masks the rainbow so it only appears near the mouse cursor
            maskImage: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
};

export default OfficerCard;
