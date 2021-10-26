import { useEffect, useRef } from 'react';
export default function useMissingThemeWarning({
  options,
  noTheme
}) {
  const shownWarnings = useRef({});
  useEffect(() => {
    if (noTheme || shownWarnings.current.missingTheme) return;
    let theme = options && options.theme;

    if (!theme) {
      console.warn(['You should supply a theme to react-quill as in', '', "  <Quill options={{ theme: 'snow' }} />", '', 'or explicitly specify that you do not want a theme', '', '  <Quill noTheme={true} />'].join('\n'));
      shownWarnings.current.missingTheme = true;
    }
  }, [noTheme, options]);
}