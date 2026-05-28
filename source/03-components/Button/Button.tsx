import clsx from 'clsx';
import { ComponentProps, JSX } from 'react';
import styles from './button.module.css';

interface SharedButtonProps {
  /**
   * Which style variation should we use?
   */
  variant?: string;
  /**
   * How large should the button be?
   */
  styleSize?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}

type ButtonProps = SharedButtonProps & ComponentProps<'button'>;
type LinkProps = SharedButtonProps & ComponentProps<'a'>;

/**
 * Primary UI component for user interaction
 */
function Button({
  variant,
  styleSize = 'medium',
  label,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variant && variant !== 'primary' && styles[`button--${variant}`],
        styleSize !== 'medium' && styles[`button--${styleSize}`],
      )}
      {...props}
    >
      {label}
    </button>
  );
}

function LinkButton({
  variant,
  styleSize = 'medium',
  label,
  ...props
}: LinkProps): JSX.Element {
  return (
    <a
      className={clsx(
        styles.button,
        variant && styles[`button--${variant}`],
        styleSize !== 'medium' && styles[`button--${styleSize}`],
      )}
      {...props}
    >
      {label}
    </a>
  );
}

export { Button, LinkButton };
export type { ButtonProps, LinkProps, SharedButtonProps };
