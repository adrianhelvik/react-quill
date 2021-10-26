import { useState } from 'react';
import Quill from '../lib';
export default function Second() {
  const [value, setValue] = useState(null);
  const [html, setHtml] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Should print warning:"), /*#__PURE__*/React.createElement(Quill, {
    value: value,
    onChange: value => setValue(value)
  }), /*#__PURE__*/React.createElement("h3", null, "Should not print warning:"), /*#__PURE__*/React.createElement(Quill, {
    value: value,
    onChange: (value, html) => {
      setValue(value);
      setHtml(html);
    },
    noTheme: true
  }), /*#__PURE__*/React.createElement("h3", null, "Result:"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(value, null, 2)), /*#__PURE__*/React.createElement("h3", null, "Resulting html:"), /*#__PURE__*/React.createElement("pre", null, html));
}