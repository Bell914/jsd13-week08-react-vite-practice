import React from 'react';
import './Button.css';

const BUTTON_KINDS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export function Button({
  kind = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  leftIcon,
  rightIcon,
  children,
  className = '',
  style = {},
  type = 'button',
  ...props
}) {
  const kindClass = `vibe-button--${kind}`;
  const sizeClass = `vibe-button--${size}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`vibe-button ${kindClass} ${sizeClass} ${className}`.trim()}
      style={style}
      {...props}
    >
      {leftIcon && <span className="vibe-button-left-icon">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="vibe-button-right-icon">{rightIcon}</span>}
    </button>
  );
}

Button.kinds = BUTTON_KINDS;
Button.sizes = BUTTON_SIZES;

export default Button;
