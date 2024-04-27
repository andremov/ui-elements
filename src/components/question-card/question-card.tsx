import { useState } from 'react';
import { Check, Dot, X } from 'lucide-react';
import TallyCounter from '../tally-counter';

interface CardProps {
  /**
   * Background for the card
   */
  backgroundColor?:
    | 'bg-emerald-300'
    | 'bg-blue-300'
    | 'bg-amber-300'
    | 'bg-purple-300'
    | 'bg-green-300'
    | 'bg-teal-300';
  /**
   * Background for the card
   */
  categoryName?: string;
  /**
   * Background for the card
   */
  cardTitle?: string;
  /**
   * Background for the card
   */
  questionTitle?: string;
  /**
   * Background for the card
   */
  questionBody?: string;
  /**
   * Background for the card
   */
  right?: number;
  /**
   * Background for the card
   */
  wrong?: number;
  /**
   * Background for the card
   */
  correctAnswer?: number;
  /**
   * Background for the card
   */
  optionNames?: string[];
}

/**
 * Primary UI component for user interaction
 */

export function QuestionCard({
  backgroundColor = 'bg-emerald-300',
  categoryName = 'Category Name',
  cardTitle = 'Card Title',
  questionTitle = 'Question Title',
  questionBody = 'Question Body',
  right = 7,
  wrong = 8,
  correctAnswer = 1,
  optionNames = ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
}: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const [pickedAnswer, setPickedAnswer] = useState<number | undefined>(undefined);

  function handlePickAnswer(index: number) {
    setPickedAnswer(index);
  }

  function handleClick() {
    if (flipped && pickedAnswer !== undefined) {
      setFlipped(false);
      setPickedAnswer(undefined);
    } else {
      setFlipped(true);
    }
  }

  return (
    <div
      className="relative m-4 h-96 w-72 sm:h-72 sm:w-96"
      onClick={handleClick}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s',
        transform: `rotateY(${flipped ? '18' : ''}0deg)`,
      }}
    >
      <div
        className="absolute h-full w-full cursor-pointer rounded-lg bg-white p-1 shadow-lg transition"
        style={{
          transform: 'translate3d(0, 0, 1)',
        }}
      >
        <div
          className={`flex h-full w-full flex-col items-center justify-around gap-2 rounded-md  p-4 text-center text-slate-800 ${backgroundColor}`}
        >
          <p>{questionTitle}</p>
          <h4 className="text-3xl font-semibold">{cardTitle}</h4>
          <p className={`bg-black/20 rounded-md px-2 py-1 text-white`}>{categoryName}</p>

          <div
            className="flex w-10/12 items-center gap-1 rounded-3xl bg-white px-3"
            style={{
              boxShadow: 'inset 0 2px 2px 0 rgb(0 0 0 / 0.3)',
            }}
          >
            <div className="flex flex-1 justify-between text-emerald-400">
              <Check />
              <TallyCounter size={25} count={right} reverse />
            </div>
            <Dot className="h-10 w-10" />
            <div className="flex flex-1 justify-between text-red-400">
              <TallyCounter size={25} count={wrong} />
              <X />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute h-full w-full rounded-lg bg-white p-1 shadow-lg transition ${
          pickedAnswer !== undefined ? 'cursor-pointer' : ''
        }`}
        style={{
          transform: 'translate3d(0, 0, -1px) rotateY(180deg)',
        }}
      >
        <div
          className={`flex h-full w-full flex-col items-center justify-around gap-2 rounded-md p-4 text-center text-slate-800 ${backgroundColor}`}
        >
          <p>
            {questionTitle}: {cardTitle}
          </p>
          <h4 className="text-2xl font-semibold">{questionBody}</h4>
          <div className="flex h-48 w-full flex-wrap items-center justify-center gap-2 sm:h-24">
            {optionNames.map((name, idx) => (
              <button
                key={idx}
                onClick={() => handlePickAnswer(idx)}
                disabled={pickedAnswer !== undefined}
                className={`h-10 w-56 rounded-md px-1 leading-4 text-slate-800 transition sm:w-36 ${
                  pickedAnswer === idx
                    ? correctAnswer === idx
                      ? 'border-2 border-white bg-lime-500'
                      : 'border-2 border-white bg-red-500'
                    : correctAnswer === idx && !!(pickedAnswer !== undefined)
                      ? 'bg-lime-500'
                      : 'bg-white/50 hover:bg-white/70 disabled:bg-black/30'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
