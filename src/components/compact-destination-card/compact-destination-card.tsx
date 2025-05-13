'use client';
import { NavigationIcon } from 'lucide-react';
import solarpunk1 from '../../stories/assets/solarpunk2.webp';

export function CompactDestinationCard() {
  return (
    <div className="w-[400px] h-[400px] bg-black rounded-3xl shadow-xl overflow-hidden relative border-8 border-white">
      <img className="w-full h-auto" src={solarpunk1} />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-40% from-yellow-700 to-transparent" />

      <div className="flex items-center justify-between gap-2 px-4 pb-4 absolute bottom-0 w-full ">
        <div className="flex flex-col">
          <span className="font-bold text-lg">Solarfarm,</span>
          <span className="font-bold text-neutral-300 text-sm">Barranquilla</span>
        </div>

        <div className="bg-black/30 text-white text-sm py-2 px-3 rounded-full font-bold flex items-center gap-2">
          <NavigationIcon className="fill-white" size={15} />
          <span>Directions</span>
        </div>
      </div>
    </div>
  );
}
