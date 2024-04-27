import { Tally1, Tally2, Tally3, Tally4, Tally5 } from 'lucide-react';

interface TallyIconProps {
  /**
   * Number to count (from 1 to 5)
   */
  count?: number;
  /**
   * Size of the icon
   */
  size?: number;
  /**
   * Color of the tally icons
   */
  tallyColor?: 'text-white' | 'text-black';
}

export function TallyIcon({ count = 5, size = 50, tallyColor = 'text-black' }: TallyIconProps) {
  switch (count) {
    case 1:
      return <Tally1 className={tallyColor} width={size} height={size} />;
    case 2:
      return <Tally2 className={tallyColor} width={size} height={size} />;
    case 3:
      return <Tally3 className={tallyColor} width={size} height={size} />;
    case 4:
      return <Tally4 className={tallyColor} width={size} height={size} />;
    case 5:
      return <Tally5 className={tallyColor} width={size} height={size} />;
    default:
      return <></>;
  }
}
