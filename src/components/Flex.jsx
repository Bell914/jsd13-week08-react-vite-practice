import React from 'react';
import './Flex.css';

export function Flex({
  direction = 'row',
  align,
  justify,
  gap,
  wrap = false,
  elementType = 'div',
  children,
  className = '',
  style = {},
  ...props
}) {
  const Component = elementType;

  const directionClass = direction ? `vibe-flex--direction-${direction}` : '';
  const alignClass = align ? `vibe-flex--align-${align}` : '';
  const justifyClass = justify ? `vibe-flex--justify-${justify}` : '';
  const gapClass = gap ? (typeof gap === 'string' ? `vibe-flex--gap-${gap}` : '') : '';
  const wrapClass = wrap ? 'vibe-flex--wrap' : '';

  const inlineStyles = {
    ...style,
    ...(typeof gap === 'number' ? { gap: `${gap}px` } : {}),
  };

  return (
    <Component
      className={`vibe-flex ${directionClass} ${alignClass} ${justifyClass} ${gapClass} ${wrapClass} ${className}`.trim()}
      style={inlineStyles}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Flex;
