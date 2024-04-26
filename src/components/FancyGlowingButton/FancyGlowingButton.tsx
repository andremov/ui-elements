import './fancyglowingbutton.css';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const FancyGlowingButton = ({ label }: ButtonProps) => {
  return (
    <button type="button" className="fgb">
      {label}
    </button>
  );
};
