import React, { useState } from 'react';
import { useAfterFirstRender } from '../hooks/useAfterFirstRender';
import { Heading } from './Heading';
import { Button } from './Button';

export function AfterFirstRenderDemo() {
  const isAfterFirstRender = useAfterFirstRender();
  const [renderCount, setRenderCount] = useState(0);
  const handleRerender = () => {
    setRenderCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
      <Heading type="h3" weight="normal">
        {isAfterFirstRender.current
          ? 'It is after the first render!'
          : 'This is the first render!'}
      </Heading>
      <p style={{ margin: 0, color: 'var(--text)' }}>Rerender count: {renderCount}</p>
      <Button onClick={handleRerender}>Rerender component</Button>
    </div>
  );
}

export default AfterFirstRenderDemo;
