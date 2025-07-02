import React from 'react';

interface GradientTitleProps {
  /**
   * Text to display
   */
  text?: string;
  /**
   * Start color of the gradient (default: #fff)
   */
  startColor?: string;
  /**
   * End color of the gradient (default: #8b5cf6)
   */
  endColor?: string;
}

export function GradientTitle({
  text = 'Component',
  startColor = '#fff',
  endColor = '#8b5cf6',
}: GradientTitleProps) {
  return (
    <span
      className="text-center text-4xl bg-gradient-to-b drop-shadow-2xl select-none from-20% to-80% bg-clip-text font-bold text-transparent"
      style={
        {
          '--tw-gradient-from': `${startColor} var(--tw-gradient-from-position)`,
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
          '--tw-gradient-to': `${endColor} var(--tw-gradient-to-position)`,
        } as React.CSSProperties
      }
    >
      {text}
    </span>
  );
}
