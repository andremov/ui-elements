'use client';
import nebula1 from '../../stories/assets/nebula1.webp';

export function ImageFade({
  srcImage = nebula1,
  animation = 1,
}: {
  srcImage?: string;
  animation?: number;
}) {
  switch (animation) {
    case 1:
      return (
        <div className="w-72 h-auto border rounded-md border-black shadow-md overflow-hidden relative">
          <img className="animate-bloom-fade-in" src={srcImage} />
        </div>
      );
    case 2:
      return (
        <div className="w-72 h-auto border rounded-md border-black shadow-md overflow-hidden relative">
          <img className="animate-revealing-fade-in" src={srcImage} />
        </div>
      );
    case 3:
      return (
        <div className="w-72 h-auto border rounded-md border-black shadow-md overflow-hidden relative">
          <img className="animate-zoom-fade-in" src={srcImage} />
        </div>
      );
  }
}
