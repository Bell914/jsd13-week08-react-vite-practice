import React, { useId, useMemo } from 'react';
import './ThemeProvider.css';

export function ThemeProvider({
  themeConfig,
  children,
  className = '',
  style = {},
  ...props
}) {
  const autoId = useId().replace(/:/g, '');
  const themeName = themeConfig?.name || `theme-${autoId}`;
  const themeClass = `theme-${themeName}`;

  // Generate CSS variables for light/dark modes
  const cssRules = useMemo(() => {
    if (!themeConfig?.colors) return '';
    const { light, dark, black } = themeConfig.colors;

    const generateVars = (colorMap) => {
      if (!colorMap) return '';
      return Object.entries(colorMap)
        .map(([key, val]) => {
          const varName = key.startsWith('--') ? key : `--${key}`;
          return `${varName}: ${val};`;
        })
        .join(' ');
    };

    const lightVars = generateVars(light);
    const darkVars = generateVars(dark || black);

    let css = `
      .${themeClass} {
        ${lightVars}
      }
    `;

    if (darkVars) {
      css += `
        @media (prefers-color-scheme: dark) {
          .${themeClass} {
            ${darkVars}
          }
        }
        .${themeClass}[data-theme="dark"], [data-theme="dark"] .${themeClass} {
          ${darkVars}
        }
      `;
    }

    return css;
  }, [themeConfig, themeClass]);

  return (
    <div
      className={`vibe-theme-provider ${themeClass} ${className}`.trim()}
      data-theme-name={themeName}
      style={style}
      {...props}
    >
      {cssRules && <style>{cssRules}</style>}
      {children}
    </div>
  );
}

export default ThemeProvider;
