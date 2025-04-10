'use client';

import clsx from 'clsx';
import { HomeIcon } from 'lucide-react';

export function TinyButton({
  children = <HomeIcon />,
  className = 'text-black',
  onClick,
  disabled = false,
}: {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'border text-black/80 h-7 w-7 border-black/20 mx-0.5 hover:bg-black/10 transition rounded-md disabled:opacity-50',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
