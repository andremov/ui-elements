import { Check } from 'lucide-react';
import { useState } from 'react';

interface ColorPickerProps {
  /**
   * Array of colors for the color picker
   */
  colors?: string[];
}

export function ColorPicker({
  colors = [
    // Red to Orange
    '#FF4444',
    '#FF6600',
    '#FF8800',
    '#FFAA00',
    // green to dark aqua
    '#00EE44',
    '#00DD88',
    '#00CCBB',
    '#00CCFF',
    // Blue to Purple
    '#0099FF',
    '#5555FF',
    '#7755FF',
    '#9944FF',
    // Violet to magenta
    '#CC33FF',
    '#FF00FF',
    '#FF00AA',
    '#FF0044',
  ],
}: ColorPickerProps) {
  const [pickedColor, setPickedColor] = useState<string>(colors[0]);
  const [templateRows, setTemplateRows] = useState<string>('2fr 1fr 1fr 1fr');
  const [templateCols, setTemplateCols] = useState<string>('2fr 1fr 1fr 1fr');

  const handlePickColor = (color: string) => {
    setPickedColor(color);

    const colorIndex = colors.indexOf(color);
    const colorRow = Math.floor(colorIndex / 4);
    const colorCol = colorIndex % 4;

    setTemplateRows(
      ['1fr', '1fr', '1fr', '1fr'].map((_, index) => (index === colorRow ? '2fr' : '1fr')).join(' ')
    );
    setTemplateCols(
      ['1fr', '1fr', '1fr', '1fr'].map((_, index) => (index === colorCol ? '2fr' : '1fr')).join(' ')
    );
  };

  return (
    <div
      className={`rounded-lg shadow-lg border bg-white p-6 grid-rows grid gap-1.5 transition-all ease-in-out duration-200 w-[148px] h-[148px]`}
      style={{
        gridTemplateColumns: templateCols,
        gridTemplateRows: templateRows,
        borderColor: `${pickedColor}88`,
      }}
    >
      {colors.map((color, index) => (
        <button
          key={index}
          className="min-h-4 min-w-4 rounded-md cursor-pointer hover:scale-125 flex items-center justify-center transition-all ease-in-out duration-200 p-1"
          style={{
            backgroundColor: color,
          }}
          onClick={() => handlePickColor(color)}
        >
          {pickedColor === color ? (
            <Check className="text-white max-w-5 max-h-5 w-full h-full" strokeWidth={4} />
          ) : (
            <></>
          )}
        </button>
      ))}
    </div>
  );
}
