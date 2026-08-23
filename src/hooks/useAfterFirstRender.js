import { useRef, useEffect } from 'react';

/**
 * Custom hook that returns a ref indicating whether the component has completed its first render.
 * - During initial render: isAfterFirstRender.current is false
 * - After first mount (in useEffect): isAfterFirstRender.current becomes true
 * @returns {React.MutableRefObject<boolean>}
 */
export function useAfterFirstRender() {
  const isAfterFirstRender = useRef(false);

  useEffect(() => {
    isAfterFirstRender.current = true;
  }, []);

  return isAfterFirstRender;
}

export default useAfterFirstRender;
