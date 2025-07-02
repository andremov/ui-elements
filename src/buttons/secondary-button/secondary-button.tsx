'use client';

import clsx from 'clsx';

export function SecondaryButton({
  className = '',
  onClick,
  children,
  disabled = false,
}: {
  className?: string;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        'flex items-center gap-2 justify-center bg-gray-100 border border-black/30 rounded-lg px-4 py-2 hover:bg-black/10 transition',
        'text-black disabled:bg-white disabled:text-gray-300 disabled:cursor-not-allowed',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
