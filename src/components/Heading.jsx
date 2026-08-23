import React from 'react';
import './Heading.css';

const HEADING_TYPES = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
};

const HEADING_WEIGHTS = {
  BOLD: 'bold',
  MEDIUM: 'medium',
  NORMAL: 'normal',
  LIGHT: 'light',
};

export function Heading({
  type = 'h2',
  element,
  weight,
  color,
  customColor,
  ellipsis = false,
  align,
  children,
  className = '',
  style = {},
  ...props
}) {
  const Component = element || (typeof type === 'string' && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type.toLowerCase()) ? type.toLowerCase() : 'h2');

  const typeClass = `vibe-heading--${type.toLowerCase()}`;
  const weightClass = weight ? `vibe-heading--${weight.toLowerCase()}` : '';
  const colorClass = color ? `vibe-heading--${color.toLowerCase()}` : '';
  const ellipsisClass = ellipsis ? 'vibe-heading--ellipsis' : '';

  const inlineStyles = {
    ...style,
    ...(customColor ? { color: customColor } : {}),
    ...(align ? { textAlign: align } : {}),
  };

  return (
    <Component
      className={`vibe-heading ${typeClass} ${weightClass} ${colorClass} ${ellipsisClass} ${className}`.trim()}
      style={inlineStyles}
      {...props}
    >
      {children}
    </Component>
  );
}

Heading.types = HEADING_TYPES;
Heading.weights = HEADING_WEIGHTS;

export default Heading;
