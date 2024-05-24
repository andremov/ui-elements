import { useEffect, useState } from 'react';

interface TallyCounterProps {
  /**
   * Text to display
   */
  text?: string;
  /**
   * Speed of the iterations (in ms)
   */
  animationSpeed?: number;
  /**
   * Number of times to switch a letter
   */
  letterIteration?: number;
}

export function HackerText({
  text = 'Component',
  letterIteration = 3,
  animationSpeed = 30,
}: TallyCounterProps) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [displayText, setDisplayText] = useState('');
  const [intervalVar, setIntervalVar] = useState<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    setDisplayText(text);
  }, []);

  function handleMouseOver() {
    let iteration = 0;

    clearInterval(intervalVar);

    let interval = setInterval(() => {
      let newDisplayText = text
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return letter;
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      setDisplayText(newDisplayText);
      iteration += 1 / letterIteration;
    }, animationSpeed);

    setIntervalVar(interval);
  }

  return (
    <div
      className="hover:bg-black hover:text-white bg-white px-2 py-1 select-none cursor-pointer text-black text-3xl font-bold rounded-md"
      onMouseOver={handleMouseOver}
    >
      <span className={`flex gap-0.5 font-mono`}>{displayText.toUpperCase()}</span>
    </div>
  );
}
