import { useEffect, useRef } from 'react';

/**
 * Custom hook that attaches an event listener to a DOM element or ref.
 *
 * @param {Object} params
 * @param {React.RefObject|HTMLElement|Window|Document} params.ref - Target ref or element
 * @param {string} params.eventName - Name of the event (e.g. 'mouseenter', 'click', 'keydown')
 * @param {Function} params.callback - Event handler callback
 * @param {Object|boolean} [params.options] - Event listener options (capture, passive, etc.)
 * @param {boolean} [params.disabled=false] - If true, listener will not be attached
 */
export function useEventListener({
  ref,
  eventName,
  callback,
  options,
  disabled = false,
} = {}) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (disabled || !eventName) return;

    const targetElement = ref && 'current' in ref ? ref.current : ref;
    if (!targetElement?.addEventListener) return;

    const eventListener = (event) => {
      savedCallback.current?.(event);
    };

    targetElement.addEventListener(eventName, eventListener, options);

    return () => {
      targetElement.removeEventListener(eventName, eventListener, options);
    };
  }, [ref, eventName, options, disabled]);
}

export default useEventListener;
