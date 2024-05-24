import { useState } from 'react';

interface GlassLoginProps {
  /**
   * Drawer label
   */
  label?: string;
  /**
   * Titles for cards in drawer
   */
  cards?: string[];
}

export function LibraryDrawer({
  label = 'A - D',
  cards = ['Artix', 'Bellevuew', 'Caravels', 'Danburry'],
}: GlassLoginProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          height: opened ? `${220 + cards.length * 25}px` : '100px',
          transitionDuration: '500ms',
        }}
        className={
          'bg-black w-72 flex flex-col items-center relative transition-all rounded-lg px-2 py-2 gap-2 overflow-hidden'
        }
      >
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="h-10 bg-orange-100 w-full text-black rounded-sm flex items-center justify-center"
          >
            <span className="">{c}</span>
          </div>
        ))}
      </div>
      <div
        className="cursor-pointer w-[20rem] h-28 bg-orange-900 rounded-md absolute bottom-0 flex items-center flex-col justify-end gap-2 p-4"
        onClick={() => setOpened(!opened)}
      >
        <div className="px-4 py-2 bg-white/20 font-bold text-white w-fit rounded-sm">{label}</div>
      </div>
    </div>
  );
}
