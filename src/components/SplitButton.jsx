import React, { useState, useRef, useEffect } from 'react';
import './SplitButton.css';

export function SplitButtonMenu({ children, className = '', ...props }) {
  return (
    <div className={`split-button-menu ${className}`.trim()} role="menu" {...props}>
      {children}
    </div>
  );
}

export function SplitButtonItem({ children, onClick, icon, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`split-menu-item ${className}`.trim()}
      role="menuitem"
      onClick={onClick}
      {...props}
    >
      {icon && <span className="split-menu-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export function SplitButton({
  id,
  children = 'Button',
  'aria-label': ariaLabel = 'Split button',
  ariaLabel: ariaLabelProp,
  onClick,
  onSecondaryDialogDidShow,
  onSecondaryDialogDidHide,
  secondaryDialogContent,
  disabled = false,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const effectiveAriaLabel = ariaLabelProp || ariaLabel;

  // Toggle dropdown dialog
  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        onSecondaryDialogDidShow?.();
      } else {
        onSecondaryDialogDidHide?.();
      }
      return next;
    });
  };

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (isOpen) {
          setIsOpen(false);
          onSecondaryDialogDidHide?.();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        onSecondaryDialogDidHide?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onSecondaryDialogDidHide]);

  // Render secondary content
  const renderSecondaryContent = () => {
    let content = null;
    if (typeof secondaryDialogContent === 'function') {
      content = secondaryDialogContent();
    } else if (secondaryDialogContent) {
      content = secondaryDialogContent;
    }

    // Default fallback menu if secondaryDialogContent returned nothing
    if (!content) {
      return (
        <SplitButtonMenu>
          <SplitButtonItem onClick={() => { setIsOpen(false); onSecondaryDialogDidHide?.(); }}>
            Action 1
          </SplitButtonItem>
          <SplitButtonItem onClick={() => { setIsOpen(false); onSecondaryDialogDidHide?.(); }}>
            Action 2
          </SplitButtonItem>
          <SplitButtonItem onClick={() => { setIsOpen(false); onSecondaryDialogDidHide?.(); }}>
            Action 3
          </SplitButtonItem>
        </SplitButtonMenu>
      );
    }

    return content;
  };

  return (
    <div
      id={id}
      ref={containerRef}
      className={`split-button-container ${className}`.trim()}
      aria-label={effectiveAriaLabel}
      {...props}
    >
      {/* Primary Action Button */}
      <button
        type="button"
        className="split-button-main"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>

      {/* Secondary Trigger Button */}
      <button
        type="button"
        className={`split-button-trigger ${isOpen ? 'is-open' : ''}`}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="More options"
        onClick={toggleDropdown}
      >
        <svg
          className="split-button-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div className="split-button-dropdown">
          {renderSecondaryContent()}
        </div>
      )}
    </div>
  );
}

export default SplitButton;
