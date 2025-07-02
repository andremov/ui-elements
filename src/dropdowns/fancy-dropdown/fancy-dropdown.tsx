import { useState } from 'react';

interface FancyDropdownProps {
  /**
   * Menus for the dropdown
   */
  menus?: DropdownSubMenuType[];
}

type DropdownOptionType = {
  name: string;
  icon: string;
};

type DropdownSubMenuType = { name: string; items: DropdownOptionType[] };

const dropdown_menu: DropdownSubMenuType[] = [
  {
    name: '1',
    items: [
      { name: 'Option1', icon: 'A' },
      { name: 'Option2', icon: 'B' },
      { name: 'Option3', icon: 'C' },
    ],
  },
  {
    name: '2',
    items: [
      { name: 'Option4', icon: 'D' },
      { name: 'Option5', icon: 'E' },
    ],
  },
  {
    name: '3',
    items: [
      { name: 'Option6', icon: 'F' },
      { name: 'Option7', icon: 'G' },
      { name: 'Option8', icon: 'H' },
      { name: 'Option9', icon: 'I' },
    ],
  },
];

export function FancyDropdown({ menus = dropdown_menu }: FancyDropdownProps) {
  const [selected, select] = useState<number | undefined>(undefined);

  return (
    <div className={'relative bg-neutral-950 w-72 h-16 flex items-center justify-end'}>
      {menus.map((m, idx) => (
        <button
          key={m.name}
          className={
            'bg-neutral-800 rounded-full transition w-10 h-10 m-2 text-white text-lg font-bold flex items-center justify-center hover:bg-neutral-700'
          }
          onClick={() => select(selected === idx ? undefined : idx)}
        >
          {m.name}
        </button>
      ))}

      <Dropdown submenu={selected === undefined ? undefined : dropdown_menu[selected]} />
    </div>
  );
}

function Dropdown({ submenu }: { submenu?: DropdownSubMenuType }) {
  const componentHeight =
    submenu === undefined ? 0 : (submenu.items.length > 0 ? 5 : 0) + submenu.items.length * 42;

  return (
    <div
      style={{
        height: `${componentHeight}px`,
        borderWidth: +(submenu !== undefined),
        transitionDuration: '500ms',
      }}
      className={
        'absolute top-[4.25rem] right-1 bg-neutral-700 border-neutral-950 w-[200px] text-white rounded-md transition-all overflow-hidden'
      }
    >
      {submenu &&
        submenu.items.map((item, idx) => {
          return (
            <div
              key={idx}
              className="cursor-pointer h-8 flex items-center p-2 text-lg font-bold m-2 rounded-md hover:bg-white/20"
            >
              <div className="bg-neutral-400 text-black rounded-full w-8 h-8 mr-2 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="">{item.name}</span>
            </div>
          );
        })}
    </div>
  );
}
