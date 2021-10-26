import useQuillPlaceholder from './useQuillPlaceholder.js';
import useMissingThemeWarning from './useMissingThemeWarning.js';
import useQuillValueSync from './useQuillValueSync.js';
import useQuillOnChange from './useQuillOnChange.js';
import useMountQuill from './useMountQuill.js';
import { useEffect } from 'react';

function useQuill({
  disallowColors,
  placeholder,
  uploadImage,
  onChange,
  noTheme,
  element,
  options,
  value
}) {
  useMissingThemeWarning({
    options,
    noTheme
  });
  const quill = useMountQuill({
    uploadImage,
    element,
    options
  });
  useEffect(() => {
    if (disallowColors && quill) {
      quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
        delta.ops = delta.ops.map(op => {
          if (op.attributes && op.attributes.color) {
            const {
              color,
              ...attributes
            } = op.attributes;
            return { ...op,
              attributes
            };
          }

          return op;
        });
        return delta;
      });
    }
  }, [disallowColors, quill]);
  useQuillPlaceholder(quill, placeholder);
  useQuillOnChange(quill, onChange);
  useQuillValueSync(quill, value);
}

export default useQuill;