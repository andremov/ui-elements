import { SparkleIcon } from 'lucide-react';
import watercolorBkg from '../../stories/assets/watercolor.webp';
import clsx from 'clsx';

interface NiceCardProps {}

export function NiceCard({}: NiceCardProps) {
  return (
    <div
      className={
        'flex flex-col bg-black rounded-xl border-black text-white overflow-hidden border-4 w-[500px] relative'
      }
    >
      <div className="absolute">
        <img src={watercolorBkg} />
      </div>

      <div className="z-10 p-4 font-serif text-black text-xl">Work fast. Live slow.</div>

      <div className="z-10 w-full h-[420px] bg-gradient-to-b from-transparent from-80% to-black"></div>

      <div className="z-10 bg-black px-4 ">
        <h2 className="text-3xl mt-10 font-serif">Transform your digital presence.</h2>

        <span className="text-sm text-gray-500">
          From zero to extraordinary. Let's create your digital reality.
        </span>

        <Button
          className="bg-gradient-to-b to-slate-950 from-slate-500 mt-4 transition-all from-0% to-80% bg-bottom hover:bg-top"
          style={{ backgroundSize: '200% 200%', transitionDuration: '500ms' }}
        >
          <span className="text-slate-300 font-">Send a message</span>
        </Button>

        <div className="w-full h-16"></div>

        <div className="flex flex-row justify-between items-center font-thin mb-2">
          <span>andremov.dev</span>

          <div className="flex flex-row gap-2 items-center">
            <span>web</span>
            <SparkleIcon className="fill-white" width={14} height={14} />
            <span>product</span>
            <SparkleIcon className="fill-white" width={14} height={14} />
            <span>brand</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Button({
  className = '',
  onClick,
  children,
  style = {},
}: {
  className?: string;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}) {
  return (
    <button
      style={style}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-lg py-2 px-4 text-white',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
