import React, { useRef, useState, useCallback } from 'react';
import { useEventListener } from '../hooks/useEventListener';
import { Box } from './Box';

export function EventListenerDemo() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const callback = useCallback(() => {
    setHovered(true);
  }, [setHovered]);

  useEventListener({
    ref,
    callback,
    eventName: 'mouseenter',
  });

  // Optional mouseleave to allow re-triggering for great UX
  const onLeave = useCallback(() => {
    setHovered(false);
  }, []);

  useEventListener({
    ref,
    callback: onLeave,
    eventName: 'mouseleave',
  });

  return (
    <Box
      ref={ref}
      border
      rounded="small"
      padding="medium"
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        display: 'inline-block',
        minWidth: '140px',
        textAlign: 'center',
        background: hovered ? 'var(--accent-bg)' : 'var(--bg)',
        borderColor: hovered ? 'var(--accent)' : 'var(--border)',
        color: hovered ? 'var(--accent)' : 'var(--text-h)',
        fontWeight: hovered ? '600' : '500',
        transition: 'all 0.2s ease',
      }}
    >
      {hovered ? 'Boom!' : 'Hover me'}
    </Box>
  );
}

export default EventListenerDemo;
