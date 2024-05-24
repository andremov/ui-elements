import { HomeIcon } from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';

interface DarkHoverCardProps {
  /**
   * Number to count (from 1 to 5)
   */
  count?: number;
  /**
   * Size of the icon (in px)
   */
  size?: number;
  /**
   * Color of the tally icons
   */
  tallyColor?: 'text-white' | 'text-black';
}

export function DarkHoverCard() {
  const [mouseX, setMouseX] = useState(-0);
  const [mouseY, setMouseY] = useState(-0);

  function handleMouseOver(e: MouseEvent) {
    const { x, y } = (e.target as HTMLDivElement).getBoundingClientRect();

    setMouseX(e.pageX - x);
    setMouseY(e.pageY - y);
    console.log(e.pageX - x, e.pageY - y);
  }

  function handleMouseLeave() {
    // setMouseX(-1000);
    // setMouseY(-1000);
  }

  return (
    <div
      className="flex cursor-pointer h-60 w-72 flex-col rounded-lg relative"
      style={{
        background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, #6c6c6c 0%, #141414 80%)`,
      }}
      onMouseMove={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="rounded-lg flex flex-col p-2 border border-white/20 flex-1 pointer-events-none">
        <div className="flex flex-1 items-center justify-center">
          <HomeIcon width={60} height={60} />
        </div>
        <div className="flex flex-1 px-5 items-center justify-start">
          <div className="flex gap-2 items-start">
            <HomeIcon />
            <div>
              <h3 className="font-bold text-md">Apartments</h3>
              <h4 className="text-white/50 text-sm">Places to be apart. Wait, what?</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
