'use client';

import clsx from 'clsx';

export function PrimaryButton({
  className = '',
  onClick,
  children,
  disabled = false,
  style = {},
}: {
  className?: string;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button
      disabled={disabled}
      style={style}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-lg py-2 px-4',
        'transition bg-emerald-500 active:bg-emerald-600 hover:bg-emerald-400',
        'text-white disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
