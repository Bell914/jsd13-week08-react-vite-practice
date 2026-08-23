import { useCallback } from 'react';

/**
 * Custom hook that generates accessible clickable properties to spread onto non-button elements (like div or span).
 *
 * @param {Object} props - Options including onClick, disabled, role, tabIndex, aria attributes, etc.
 * @param {React.RefObject} ref - Optional ref to the target element.
 * @returns {Object} Props to spread onto the interactive element.
 */
export function useClickableProps(props = {}, ref = null) {
  const {
    onClick,
    onMouseDown,
    onKeyDown,
    disabled = false,
    role = 'button',
    tabIndex = 0,
    id,
    'aria-hidden': ariaHidden,
    'aria-haspopup': ariaHasPopup,
    'aria-expanded': ariaExpanded,
    'aria-disabled': ariaDisabled,
    'aria-label': ariaLabel,
    style = {},
    ...rest
  } = props;

  const handleKeyDown = useCallback(
    (event) => {
      onKeyDown?.(event);
      if (disabled || event.defaultPrevented) return;

      // Trigger onClick on Enter or Space
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick?.(event);
      }
    },
    [onClick, onKeyDown, disabled]
  );

  const handleClick = useCallback(
    (event) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    },
    [onClick, disabled]
  );

  return {
    id,
    role,
    tabIndex: disabled ? -1 : tabIndex,
    onClick: handleClick,
    onMouseDown,
    onKeyDown: handleKeyDown,
    'aria-disabled': disabled ? 'true' : (ariaDisabled ? String(ariaDisabled) : undefined),
    'aria-hidden': ariaHidden,
    'aria-haspopup': ariaHasPopup,
    'aria-expanded': ariaExpanded,
    'aria-label': ariaLabel,
    style: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      ...style,
    },
    ...rest,
  };
}

export default useClickableProps;
