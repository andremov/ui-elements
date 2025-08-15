import { useEffect, useRef } from 'react';

export function MagicSparklesBackground({
  backgroundColor = '#0b0d17',
  colors = ['#a2d2ff', '#bde0fe', '#ffffff'], // magical blues & white
  sparkleCount = 80,
  minSize = 0.25,
  maxSize = 1.5,
  minSpeed = 0.05,
  maxSpeed = 0.2,
  fadeHeight = 0.5, // fraction of screen height before fading out
}: {
  backgroundColor?: string;
  colors?: string[];
  sparkleCount?: number;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  fadeHeight?: number;
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

    class Sparkle {
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      alpha: number;
      drift: number;
      maxRise: number;
      risen: number;

      constructor() {
        if (!canvas) {
          throw new Error('No canvas?');
        }

        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50; // spawn just below bottom
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.drift = (Math.random() - 0.5) * 0.5; // gentle side sway
        this.maxRise = canvas.height * fadeHeight;
        this.risen = 0;
      }

      reset() {
        if (!canvas) return;

        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50; // spawn just below bottom
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.drift = (Math.random() - 0.5) * 0.0005; // gentle side sway
        this.maxRise = canvas.height * fadeHeight;
        this.risen = 0;
      }

      update() {
        if (!canvas) return;

        this.y -= this.speed;
        this.x += this.drift;
        this.risen += this.speed;
        this.alpha = 1 - this.risen / this.maxRise; // fade out
        if (this.alpha <= 0) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const sparkles = Array.from({ length: sparkleCount }, () => new Sparkle());

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      sparkles.forEach((sparkle) => {
        sparkle.update();
        sparkle.draw(ctx);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [backgroundColor, colors, sparkleCount, minSize, maxSize, minSpeed, maxSpeed, fadeHeight]);

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
