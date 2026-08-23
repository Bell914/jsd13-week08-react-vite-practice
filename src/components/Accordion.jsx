import React, { createContext, useContext, useState, useId } from 'react';
import './Accordion.css';

const AccordionContext = createContext(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }
  return context;
};

export function Accordion({
  id: customId,
  allowMultiple = false,
  defaultIndex = [],
  className = '',
  children,
  onChange,
  ...props
}) {
  const generatedId = useId();
  const accordionId = customId || `accordion-${generatedId}`;

  // Normalize defaultIndex to array
  const initialOpen = Array.isArray(defaultIndex)
    ? (allowMultiple ? defaultIndex : (defaultIndex.length > 0 ? [defaultIndex[0]] : []))
    : (typeof defaultIndex === 'number' ? [defaultIndex] : []);

  const [openIndexes, setOpenIndexes] = useState(initialOpen);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) => {
      let next;
      if (allowMultiple) {
        if (prev.includes(index)) {
          next = prev.filter((i) => i !== index);
        } else {
          next = [...prev, index];
        }
      } else {
        next = prev.includes(index) ? [] : [index];
      }
      onChange?.(next);
      return next;
    });
  };

  return (
    <AccordionContext.Provider
      value={{
        openIndexes,
        toggleIndex,
        accordionId,
        allowMultiple,
      }}
    >
      <div id={accordionId} className={`accordion-root ${className}`.trim()} {...props}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, {
            index: child.props.index ?? index,
          });
        })}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id: customId,
  title,
  index,
  disabled = false,
  className = '',
  children,
  ...props
}) {
  const { openIndexes, toggleIndex, accordionId } = useAccordion();
  const isOpen = typeof index === 'number' ? openIndexes.includes(index) : false;

  const itemId = customId || `${accordionId}-item-${index}`;
  const headerId = `${itemId}-header`;
  const panelId = `${itemId}-panel`;

  const handleClick = () => {
    if (disabled || typeof index !== 'number') return;
    toggleIndex(index);
  };

  return (
    <div
      id={itemId}
      className={`accordion-item ${isOpen ? 'is-open' : ''} ${className}`.trim()}
      {...props}
    >
      <h3 className="accordion-header">
        <button
          type="button"
          id={headerId}
          className="accordion-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          disabled={disabled}
          onClick={handleClick}
        >
          <span className="accordion-title-wrapper">
            {title}
          </span>
          <span className="accordion-icon-indicator" aria-hidden="true">
            <svg
              className="accordion-icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`accordion-panel ${isOpen ? 'is-open' : ''}`}
      >
        <div className="accordion-panel-inner">
          <div className="accordion-panel-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
