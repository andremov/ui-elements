import { useEffect, useRef } from 'react';

export function SpaceBackground({
  backgroundColor = '#0b0d17',
  starColor = '#ffffff',
  starCount = 200,
  minStarSize = 0.25,
  maxStarSize = 1.0,
  starMinSpeed = 0.01,
  starMaxSpeed = 0.05,
}: {
  backgroundColor?: string;
  starColor?: string;
  starCount?: number;
  minStarSize?: number;
  maxStarSize?: number;
  starMinSpeed?: number;
  starMaxSpeed?: number;
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

    class Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      driftX: number;
      driftY: number;
      starSpeed: number;

      constructor() {
        if (!canvas) {
          throw new Error('No canvas?');
        }

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
        this.baseAlpha = Math.random() * 0.5 + 0.5; // Base brightness
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        this.driftX = (Math.random() - 0.5) * 0.02; // Subtle drift
        this.driftY = (Math.random() - 0.5) * 0.02;

        const sizePercentage = (this.size - minStarSize) / (maxStarSize - minStarSize);
        this.starSpeed = starMaxSpeed - sizePercentage * (starMaxSpeed - starMinSpeed);
      }

      reset() {
        if (!canvas) return;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
        this.baseAlpha = Math.random() * 0.5 + 0.5; // Base brightness
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        this.driftX = (Math.random() - 0.5) * 0.02; // Subtle drift
        this.driftY = (Math.random() - 0.5) * 0.02;
      }

      update() {
        if (!canvas) return;

        this.twinkleOffset += this.twinkleSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.twinkleOffset) * 0.3 * this.baseAlpha;

        if (this.starSpeed === 0) {
          this.x += this.driftX;
          this.y += this.driftY;
        } else {
          this.y -= this.starSpeed;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }

        // Wrap stars around the screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const stars = Array.from({ length: starCount }, () => new Star());

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [backgroundColor, starColor, starCount, minStarSize, maxStarSize]);

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

export function StylizedSpaceBackground({
  backgroundColor = '#05010a',
  starColor = '#ffffff',
  starCount = 150,
  minStarSize = 1,
  maxStarSize = 3,
  starSpeed = 0.02, // vertical drift
  shootingStarChance = 0.002, // probability per frame
}: {
  backgroundColor?: string;
  starColor?: string;
  starCount?: number;
  minStarSize?: number;
  maxStarSize?: number;
  starSpeed?: number;
  shootingStarChance?: number;
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

    class Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;

      constructor() {
        if (!canvas) {
          throw new Error('No canvas?');
        }

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
        this.baseAlpha = Math.random() * 0.5 + 0.5;
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02; // stronger twinkle
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }

      reset() {
        if (!canvas) return;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
        this.baseAlpha = Math.random() * 0.5 + 0.5;
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02; // stronger twinkle
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }

      update() {
        if (!canvas) return;

        // Twinkle with bigger variation
        this.twinkleOffset += this.twinkleSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.twinkleOffset) * 0.6 * this.baseAlpha;

        // Vertical drift
        if (starSpeed !== 0) {
          this.y -= starSpeed;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      life: number;
      maxLife: number;
      active: boolean;

      constructor() {
        if (!canvas) {
          throw new Error('No canvas?');
        }

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5; // upper half of screen
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 10 + 6;
        this.angle = Math.PI / 4; // 45° diagonal
        this.life = 0;
        this.maxLife = 30; // frames
        this.active = true;
      }

      reset() {
        if (!canvas) return;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5; // upper half of screen
        this.length = Math.random() * 80 + 50;
        this.speed = Math.random() * 10 + 6;
        this.angle = Math.PI / 4; // 45° diagonal
        this.life = 0;
        this.maxLife = 30; // frames
        this.active = true;
      }

      update() {
        if (!canvas) return;

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;
        if (this.life > this.maxLife) {
          this.active = false;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const grad = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - this.length,
          this.y - this.length
        );
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length, this.y - this.length);
        ctx.stroke();
      }
    }

    const stars = Array.from({ length: starCount }, () => new Star());
    let shootingStars: ShootingStar[] = [];

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      // Shooting stars
      if (Math.random() < shootingStarChance) {
        shootingStars.push(new ShootingStar());
      }

      shootingStars = shootingStars.filter((s) => s.active);
      shootingStars.forEach((s) => {
        s.update();
        s.draw(ctx);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [
    backgroundColor,
    starColor,
    starCount,
    minStarSize,
    maxStarSize,
    starSpeed,
    shootingStarChance,
  ]);

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
