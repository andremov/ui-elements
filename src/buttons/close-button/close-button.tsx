'use client';

import { XIcon } from 'lucide-react';
import { SmallButton } from '../small-button';

export function CloseButton({
  className = 'text-black',
  onClick,
  disabled = false,
}: {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <SmallButton onClick={onClick} className={className} disabled={disabled}>
      <XIcon />
    </SmallButton>
  );
}
