import './glowing-button.css';

interface GlowingButtonProps {
  /**
   * Button label
   */
  label: string;
  /**
   * Glow animation duration (in seconds)
   */
  duration?: number;
  /**
   * Glow animation duration (in seconds) when hovered
   */
  hoverDuration?: number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Animation colors
   */
  colors?: string[];
  /**
   * Background color of the button
   */
  backgroundColor?: string;
  /**
   * Text color of the button
   */
  textColor?: string;
  /**
   * Spread of the glow
   */
  glowSpread?: number;
  /**
   * Blurriness of the glow
   */
  glowBlur?: number;
  /**
   * Radius of the button corners
   */
  borderRadius?: number;
  /**
   * Width of the rainbow border
   */
  borderWidth?: number;
}

const defaultColors = ['#ff6565', '#ff64f9', '#6b5fff', '#4d8aff', '#5bff89', '#ffee55', '#ff6d1b'];

/**
 * Primary UI component for user interaction
 */
export const GlowingButton = ({
  backgroundColor = '#121213',
  textColor = '#f3f3f3',
  label,
  onClick,
  colors = defaultColors,
  duration = 2,
  glowSpread = 50,
  glowBlur = 4,
  borderRadius = 2,
  borderWidth = 0.3,
  hoverDuration = 0.5,
}: GlowingButtonProps) => {
  if (!Array.isArray(colors) || colors.length === 0) {
    colors = defaultColors;
  }

  return (
    <button
      type="button"
      className="fgb"
      onClick={onClick}
      style={
        {
          '--backgroundColor': backgroundColor,
          '--textColor': textColor,
          '--animationDuration': `${duration}s`,
          '--hoverDuration': `${hoverDuration}s`,
          '--glowSpread': `${glowSpread}%`,
          '--glowBlur': `${glowBlur}rem`,
          '--borderRadius': `${borderRadius}rem`,
          '--borderWidth': `${borderWidth}rem`,
          '--colorGradient': `linear-gradient(90deg,${colors.reduce((acc, c) => `${acc},${c}`)})`,
        } as React.CSSProperties
      }
    >
      {label}
    </button>
  );
};
