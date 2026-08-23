import React, { useRef, useCallback } from 'react';
import { useClickableProps } from '../hooks/useClickableProps';
import './ClickablePropsDemo.css';

export function ClickablePropsDemo() {
  const ref = useRef(null);
  const onClick = useCallback(() => alert('click!'), []);
  const clickableProps = useClickableProps(
    {
      onClick: onClick,
      id: 'clickable-id',
      'aria-hidden': false,
      'aria-haspopup': false,
      'aria-expanded': false,
    },
    ref
  );

  return (
    <div {...clickableProps} className="monday-storybook-use-clickable-props" ref={ref}>
      I act like a button
    </div>
  );
}

export default ClickablePropsDemo;
