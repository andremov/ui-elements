'use client';

import clsx from 'clsx';
import { HomeIcon } from 'lucide-react';

export function SmallButton({
  children = <HomeIcon />,
  className = 'text-black',
  onClick,
  disabled = false,
  title,
}: {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={clsx(
        'border text-black/80 p-1 h-9 w-9 border-black/20 hover:bg-black/10 transition rounded-md disabled:opacity-50',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
