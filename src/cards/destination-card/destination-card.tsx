'use client';
import { ChevronRightIcon, DotIcon } from 'lucide-react';
import medieval1 from '../../stories/assets/medieval1.webp';

export function DestinationCard() {
  return (
    <div className="w-72 bg-black h-auto rounded-3xl shadow-md overflow-hidden relative">
      <div className="relative">
        <img className="w-full h-auto" src={medieval1} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-800 to-transparent"></div>
      </div>
      <div className="pb-4 bg-neutral-800 flex flex-col gap-2 px-4">
        <span className="font-bold text-2xl">Andorhal</span>
        <div className="flex text-sm items-center text-white/50">
          <span>2 Taverns</span>
          <DotIcon />
          <span>15 Quests</span>
        </div>
        <button className="flex items-center justify-between w-full text-sm text-white/80 hover:text-white p-2 bg-black/30 rounded-md transition">
          <span>Quest here</span>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
