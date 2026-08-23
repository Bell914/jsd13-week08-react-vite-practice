import React from 'react';
import './Clickable.css';

export function Clickable({
  elementType = 'button',
  children,
  onClick,
  disabled = false,
  className = '',
  style = {},
  tabIndex = 0,
  role = 'button',
  ...props
}) {
  const Component = elementType;

  const handleKeyDown = (event) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(event);
    }
  };

  const isButtonElement = Component === 'button';

  return (
    <Component
      type={isButtonElement ? 'button' : undefined}
      role={!isButtonElement ? role : undefined}
      tabIndex={disabled ? -1 : tabIndex}
      disabled={isButtonElement ? disabled : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={!isButtonElement ? handleKeyDown : undefined}
      className={`vibe-clickable ${disabled ? 'is-disabled' : ''} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Clickable;
