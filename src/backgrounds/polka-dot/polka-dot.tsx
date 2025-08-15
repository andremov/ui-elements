import { useEffect, useRef } from 'react';

type DotDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export function PolkaDotBackground({
  backgroundColor = '#3498db',
  dotColor = '#ffffff',
  dotRows = 10,
  dotsPerRow = 10,
  direction = 'up',
  dotPace = 0.002,
  dotStartingSize = 1,
  dotTargetSize = 50,
}: {
  backgroundColor?: string;
  dotColor?: string;
  dotRows?: number;
  dotsPerRow?: number;
  direction?: DotDirection;
  dotPace?: number;
  dotStartingSize?: number;
  dotTargetSize?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Demo size
    const DEMO_WIDTH = 600;
    const DEMO_HEIGHT = 400;
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = DEMO_WIDTH;
      canvas.height = DEMO_HEIGHT;
    }
    resizeCanvas();
    // No need to listen for resize in demo mode
    // window.addEventListener('resize', resizeCanvas);

    class Dot {
      currentX: number;
      currentY: number;
      targetX: number;
      targetY: number;
      startX: number;
      startY: number;

      currentSize: number;
      startSize: number;
      targetSize: number;

      pace: number;
      alpha: number;
      percent: number;

      constructor(
        startX: number,
        targetX: number,
        startY: number,
        targetY: number,
        pace: number,
        startingSize: number,
        targetSize: number,
        percent: number = 0 // default to 0 if not provided
      ) {
        if (!canvas) {
          throw new Error('No canvas?');
        }

        this.startX = startX;
        this.startY = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.startSize = startingSize;
        this.targetSize = targetSize;
        this.pace = pace;
        this.alpha = 1;
        this.percent = percent;

        // Set initial position and size based on percent
        this.currentX = this.startX + (this.targetX - this.startX) * this.percent;
        this.currentY = this.startY + (this.targetY - this.startY) * this.percent;
        this.currentSize = this.startSize + (this.targetSize - this.startSize) * this.percent;
      }

      reset() {
        if (!canvas) return;

        this.currentX = this.startX;
        this.currentY = this.startY;

        this.currentSize = this.startSize;

        this.alpha = 1; //0;

        this.percent = 0;
      }

      update() {
        if (!canvas) return;

        this.percent += this.pace;

        if (this.percent > 1) {
          this.reset();
          return;
        }

        this.currentX = this.startX + (this.targetX - this.startX) * this.percent;
        this.currentY = this.startY + (this.targetY - this.startY) * this.percent;

        this.currentSize = this.startSize + (this.targetSize - this.startSize) * this.percent;

        this.alpha = 1; // this.percent;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.currentX, this.currentY, this.currentSize, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const dots = Array.from({ length: dotRows }, (_: any, rowIdx: number) => {
      const dotsInThisRow = Array.from({ length: dotsPerRow }, (_: any, colIdx: number) => {
        let startX, startY, targetX, targetY;

        switch (direction) {
          case 'up':
            ({ startX, startY, targetX, targetY } = dotDirectionUp(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'bottom-left':
            ({ startX, startY, targetX, targetY } = dotDirectionBottomLeft(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'bottom-right':
            ({ startX, startY, targetX, targetY } = dotDirectionBottomRight(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'left':
            ({ startX, startY, targetX, targetY } = dotDirectionLeft(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'right':
            ({ startX, startY, targetX, targetY } = dotDirectionRight(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'down':
            ({ startX, startY, targetX, targetY } = dotDirectionDown(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'top-left':
            ({ startX, startY, targetX, targetY } = dotDirectionTopLeft(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
          case 'top-right':
            ({ startX, startY, targetX, targetY } = dotDirectionTopRight(
              canvas.width,
              canvas.height,
              dotsPerRow,
              colIdx,
              rowIdx
            ));
            break;
        }

        const pace = dotPace;
        const startingSize = dotStartingSize;
        const targetSize = dotTargetSize;

        return new Dot(
          startX,
          targetX,
          startY,
          targetY,
          pace,
          startingSize,
          targetSize,
          rowIdx * 0.1
        );
      });
      return dotsInThisRow;
    }).flat();

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.update();
        dot.draw(ctx);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [backgroundColor, dotColor, dotRows]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{
        display: 'block',
        background: backgroundColor,
        margin: '2rem auto',
        borderRadius: '12px',
        boxShadow: '0 2px 16px #0002',
        maxWidth: '100%',
      }}
    />
  );
}

function dotDirectionDown(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const startX = (canvasWidth / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5);
  const startY = -100;

  const targetX = startX;
  const targetY = canvasHeight + 100;

  return { startX, startY, targetX, targetY };
}

function dotDirectionUp(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const startX = (canvasWidth / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5);
  const startY = canvasHeight + 100;

  const targetX = startX;
  const targetY = -100;

  return { startX, startY, targetX, targetY };
}

function dotDirectionLeft(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const startX = canvasWidth + 100;
  const startY = (canvasHeight / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5);

  const targetX = -100;
  const targetY = startY;

  return { startX, startY, targetX, targetY };
}

function dotDirectionRight(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const startX = -100;
  const startY = (canvasHeight / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5);

  const targetX = canvasWidth + 100;
  const targetY = startY;

  return { startX, startY, targetX, targetY };
}

function getCanvasDiagonal(canvasWidth: number, canvasHeight: number) {
  return Math.sqrt(canvasWidth ** 2 + canvasHeight ** 2);
}

function dotDirectionBottomRight(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const diagonal = getCanvasDiagonal(canvasWidth, canvasHeight);

  // Distribute dots along the diagonal in the top left corner of the canvas
  const startX =
    0 + (canvasWidth / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);
  const startY =
    0 - (canvasHeight / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);

  // Distribute the dots' targets along the diagonal in the bottom right corner of the canvas
  const targetX = startX + diagonal;
  const targetY = startY + diagonal;

  return { startX, startY, targetX, targetY };
}

function dotDirectionBottomLeft(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const diagonal = getCanvasDiagonal(canvasWidth, canvasHeight);

  // Distribute dots along the diagonal in the top right corner of the canvas
  const startX =
    canvasWidth +
    (canvasWidth / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);
  const startY =
    0 + (canvasHeight / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);

  // Distribute the dots' targets along the diagonal in the bottom left corner of the canvas
  const targetX = startX - diagonal;
  const targetY = startY + diagonal;

  return { startX, startY, targetX, targetY };
}

function dotDirectionTopLeft(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const diagonal = getCanvasDiagonal(canvasWidth, canvasHeight);

  // Distribute dots along the diagonal in the top right corner of the canvas
  const startX =
    canvasWidth +
    (canvasWidth / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);
  const startY =
    canvasHeight -
    (canvasHeight / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);

  // Distribute the dots' targets along the diagonal in the bottom right corner of the canvas
  const targetX = startX - diagonal;
  const targetY = startY - diagonal;

  return { startX, startY, targetX, targetY };
}

function dotDirectionTopRight(
  canvasWidth: number,
  canvasHeight: number,
  dotsPerRow: number,
  colIdx: number,
  rowIdx: number
) {
  const diagonal = getCanvasDiagonal(canvasWidth, canvasHeight);

  // Distribute dots along the diagonal in the top right corner of the canvas
  const startX =
    0 - (canvasWidth / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);
  const startY =
    canvasHeight -
    (canvasHeight / (dotsPerRow - 2)) * (colIdx - 0.5 + (rowIdx % 2) * 0.5 - dotsPerRow / 2);

  // Distribute the dots' targets along the diagonal in the bottom right corner of the canvas
  const targetX = startX + diagonal;
  const targetY = startY - diagonal;

  return { startX, startY, targetX, targetY };
}
