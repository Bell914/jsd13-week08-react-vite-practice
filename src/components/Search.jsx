import React, { forwardRef } from 'react';
import './Search.css';

export const Search = forwardRef(function Search(
  {
    role = 'combobox',
    currentAriaResultId,
    placeholder = 'Search...',
    value,
    onChange,
    onClear,
    className = '',
    style = {},
    ...props
  },
  ref
) {
  return (
    <div className={`vibe-search-wrapper ${className}`.trim()} style={style}>
      <svg
        className="vibe-search-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        ref={ref}
        type="text"
        role={role}
        aria-activedescendant={currentAriaResultId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="vibe-search-input"
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="vibe-search-clear"
          aria-label="Clear search"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
});

export default Search;
