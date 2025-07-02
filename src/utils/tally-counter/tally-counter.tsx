import TallyIcon from '../tally-icon';

interface TallyCounterProps {
  /**
   * Size of tallies (in px)
   */
  size?: number;
  /**
   * Number to count to (greater than or equal to 0)
   */
  count?: number;
  /**
   * Max number to count to (greater than or equal to 0)
   */
  maxCount?: number;
  /**
   * Whether to display the count LTR or RTL
   */
  reverse?: boolean;
  /**
   * Color of the tally icons
   */
  tallyColor?: 'text-white' | 'text-black';
}

export function TallyCounter({
  count = 7,
  reverse = false,
  size = 50,
  tallyColor = 'text-black',
  maxCount = 10,
}: TallyCounterProps) {
  const fullTallies = Math.floor(count / 5);
  const remTallies = count - fullTallies * 5;

  if (count === 0) return <span className={tallyColor}>0</span>;
  if (count > maxCount) return <span className={tallyColor}>{count}</span>;

  return (
    <span className={`flex gap-0.5 ${reverse ? 'flex-row-reverse' : ''}`}>
      {[...Array(fullTallies).keys()].map((item) => (
        <TallyIcon size={size} count={5} key={item} tallyColor={tallyColor} />
      ))}
      <div style={reverse ? { transform: 'rotateY(180deg)' } : {}}>
        <TallyIcon size={size} count={remTallies} tallyColor={tallyColor} />
      </div>
    </span>
  );
}
