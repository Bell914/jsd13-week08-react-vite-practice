import React, { useRef, useCallback } from 'react';
import { useActiveDescendantListFocus } from '../hooks/useActiveDescendantListFocus';
import { Flex } from './Flex';
import { Search } from './Search';
import styles from './ActiveDescendantOverview.module.css';

export function ActiveDescendantOverview() {
  const focusedElementRef = useRef(null);
  const itemsIds = ['id-1', 'id-2', 'id-3'];
  const isItemSelectable = useCallback(() => true, []);
  const onItemClick = useCallback(() => {
    alert('clicked');
  }, []);

  const {
    focusedElementProps,
    visualFocusItemId,
  } = useActiveDescendantListFocus({
    focusedElementRef,
    focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,
    itemsIds,
    onItemClick,
    isItemSelectable,
    isHorizontalList: false,
    isIgnoreSpaceAsItemSelection: true,
  });

  return (
    <div className={styles.overviewContainer}>
      <Flex direction="column" gap="small">
        <Search
          ref={focusedElementRef}
          role={focusedElementProps.role}
          currentAriaResultId={focusedElementProps['aria-activedescendant']}
          placeholder="Type or use Arrow Up/Down..."
        />
        <ul className={styles.list}>
          <li
            onClick={onItemClick}
            className={`${styles.listItem} ${visualFocusItemId === 'id-1' ? styles.visualFocus : ''}`.trim()}
            id="id-1"
            key="id-1"
          >
            Item 1
          </li>
          <li
            onClick={onItemClick}
            className={`${styles.listItem} ${visualFocusItemId === 'id-2' ? styles.visualFocus : ''}`.trim()}
            id="id-2"
            key="id-2"
          >
            Item 2
          </li>
          <li
            onClick={onItemClick}
            className={`${styles.listItem} ${visualFocusItemId === 'id-3' ? styles.visualFocus : ''}`.trim()}
            id="id-3"
            key="id-3"
          >
            Item 3
          </li>
        </ul>
      </Flex>
    </div>
  );
}

export default ActiveDescendantOverview;
