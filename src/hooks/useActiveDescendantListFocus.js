import { useState, useCallback, useEffect } from 'react';

export const FOCUS_ROLES = {
  COMBOBOX: 'combobox',
  TEXTBOX: 'textbox',
  SEARCHBOX: 'searchbox',
  GRID: 'grid',
};

export function useActiveDescendantListFocus({
  focusedElementRef,
  focusedElementRole = FOCUS_ROLES.COMBOBOX,
  itemsIds = [],
  onItemClick,
  isItemSelectable = () => true,
  isHorizontalList = false,
  isIgnoreSpaceAsItemSelection = true,
  defaultVisualFocusItemId = null,
} = {}) {
  const [visualFocusItemId, setVisualFocusItemId] = useState(defaultVisualFocusItemId);

  const handleKeyDown = useCallback(
    (event) => {
      if (!itemsIds || itemsIds.length === 0) return;

      const selectableIds = itemsIds.filter((id) => isItemSelectable(id));
      if (selectableIds.length === 0) return;

      const currentIndex = visualFocusItemId ? selectableIds.indexOf(visualFocusItemId) : -1;

      const nextKey = isHorizontalList ? 'ArrowRight' : 'ArrowDown';
      const prevKey = isHorizontalList ? 'ArrowLeft' : 'ArrowUp';

      if (event.key === nextKey) {
        event.preventDefault();
        const nextIndex = currentIndex === -1 || currentIndex === selectableIds.length - 1 ? 0 : currentIndex + 1;
        setVisualFocusItemId(selectableIds[nextIndex]);
      } else if (event.key === prevKey) {
        event.preventDefault();
        const prevIndex = currentIndex <= 0 ? selectableIds.length - 1 : currentIndex - 1;
        setVisualFocusItemId(selectableIds[prevIndex]);
      } else if (event.key === 'Home') {
        event.preventDefault();
        setVisualFocusItemId(selectableIds[0]);
      } else if (event.key === 'End') {
        event.preventDefault();
        setVisualFocusItemId(selectableIds[selectableIds.length - 1]);
      } else if (event.key === 'Enter' || (!isIgnoreSpaceAsItemSelection && event.key === ' ')) {
        if (visualFocusItemId) {
          event.preventDefault();
          onItemClick?.(event, visualFocusItemId);
        }
      } else if (event.key === 'Escape') {
        setVisualFocusItemId(null);
      }
    },
    [itemsIds, visualFocusItemId, isItemSelectable, isHorizontalList, isIgnoreSpaceAsItemSelection, onItemClick]
  );

  useEffect(() => {
    const el = focusedElementRef?.current;
    if (!el) return;

    el.addEventListener('keydown', handleKeyDown);
    return () => {
      el.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedElementRef, handleKeyDown]);

  const focusedElementProps = {
    role: focusedElementRole,
    'aria-activedescendant': visualFocusItemId || undefined,
    'aria-autocomplete': 'list',
  };

  return {
    focusedElementProps,
    visualFocusItemId,
    setVisualFocusItemId,
  };
}

useActiveDescendantListFocus.roles = FOCUS_ROLES;

export default useActiveDescendantListFocus;
