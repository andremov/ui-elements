'use client';
import { ChevronRightIcon } from 'lucide-react';
import solarpunk1 from '../../stories/assets/solarpunk1.webp';

export function BookingCard() {
  return (
    <div className="w-72 bg-black h-auto rounded-3xl shadow-md overflow-hidden relative">
      <div className="relative">
        <img className="w-full h-auto" src={solarpunk1} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-yellow-700 to-transparent"></div>
      </div>
      <div className="bg-yellow-700 flex gap-2 flex-col px-4 pb-4">
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl">Solarfarm</span>
          <div className="bg-black/30 text-white text-sm py-0.5 px-3 rounded-full font-bold">
            $100
          </div>
        </div>
        <div className="flex text-sm items-center text-white/50">
          <p>A serene farm powered by renewable energy.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="bg-white/30 px-2 py-0.5 rounded-full">Top Rated</div>
          <div className="bg-white/30 px-2 py-0.5 rounded-full">3 Day Stay</div>
        </div>
        <button className="flex items-center justify-between w-full text-sm text-white/80 hover:text-white px-4 py-2 bg-black/30 rounded-md transition">
          <span>Book</span>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
