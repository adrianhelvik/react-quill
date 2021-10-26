import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React, { useState } from 'react';
import useQuill from './useQuill.js';

function ReactQuill({
  disallowColors,
  uploadImage,
  placeholder,
  className,
  onChange,
  noTheme,
  options,
  value,
  style
}) {
  const [element, setElement] = useState();
  useQuill({
    disallowColors,
    placeholder,
    uploadImage,
    onChange,
    noTheme,
    options,
    element,
    value
  });
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: className,
    ref: setElement
  });
}

export default ReactQuill;