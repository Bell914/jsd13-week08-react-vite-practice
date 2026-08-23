import React, { forwardRef } from 'react';
import './Box.css';

export const Box = forwardRef(function Box(
  {
    elementType = 'div',
    border = false,
    padding = 'none',
    rounded = 'none',
    shadow = 'none',
    backgroundColor,
    children,
    className = '',
    style = {},
    ...props
  },
  ref
) {
  const Component = elementType;

  const borderClass = border ? 'vibe-box--border' : '';
  const paddingClass = padding ? `vibe-box--padding-${padding}` : '';
  const roundedClass = rounded === true ? 'vibe-box--rounded-small' : (rounded ? `vibe-box--rounded-${rounded}` : '');
  const shadowClass = shadow && shadow !== 'none' ? `vibe-box--shadow-${shadow}` : '';

  const inlineStyles = {
    ...style,
    ...(backgroundColor ? { backgroundColor } : {}),
  };

  return (
    <Component
      ref={ref}
      className={`vibe-box ${borderClass} ${paddingClass} ${roundedClass} ${shadowClass} ${className}`.trim()}
      style={inlineStyles}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Box;
