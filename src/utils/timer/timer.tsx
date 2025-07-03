import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerProps {
  /**
   * Initial time in seconds
   */
  initialTime?: number;
  /**
   * Timer mode: 'stopwatch' counts up, 'countdown' counts down
   */
  mode?: 'stopwatch' | 'countdown';
  /**
   * Callback when timer reaches zero (countdown mode)
   */
  onComplete?: () => void;
  /**
   * Custom styling
   */
  className?: string;
}

export function Timer({
  initialTime = 0,
  mode = 'stopwatch',
  onComplete,
  className = '',
}: TimerProps) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (mode === 'countdown') {
            const newTime = prevTime - 1;
            if (newTime <= 0) {
              setIsRunning(false);
              onComplete?.();
              return 0;
            }
            return newTime;
          } else {
            return prevTime + 1;
          }
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, mode, onComplete]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  // Calculate progress percentage for countdown mode
  const getCountdownProgress = () => {
    if (mode !== 'countdown' || initialTime === 0) return 0;
    return ((initialTime - time) / initialTime) * 100;
  };

  // Circular progress ring component
  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const radius = 85;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <svg
        className="pointer-events-none absolute"
        height={radius * 2}
        width={radius * 2}
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#3b82f6"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    );
  };

  return (
    <div
      className={`rounded-lg shadow-lg border bg-white p-6 flex flex-col items-center justify-center transition-all ease-in-out duration-200 w-[200px] h-[200px] relative ${className}`}
    >
      {/* Circular progress ring for countdown mode */}
      {mode === 'countdown' && <CircularProgress percentage={getCountdownProgress()} />}

      {/* Timer Display */}
      <div className="text-2xl font-mono font-bold text-gray-800 mb-2 z-10">{formatTime(time)}</div>

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={handlePlayPause}
          className={`p-1.5 rounded-full transition-all duration-200 ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
          aria-label={isRunning ? 'Pause' : 'Play'}
        >
          {isRunning ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <button
          onClick={handleReset}
          className="p-1.5 rounded-full bg-gray-500 hover:bg-gray-600 text-white transition-all duration-200"
          aria-label="Reset"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
}
