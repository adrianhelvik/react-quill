import './styles.css';
import First from './First';
import Second from './Second';
export default function Examples() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "First example"), /*#__PURE__*/React.createElement(First, null), /*#__PURE__*/React.createElement("h1", null, "Second example"), /*#__PURE__*/React.createElement("p", null, "This is Quill without any options. Its first Quill component should print a warning about no theme being specified to the console. The second one should however receive the prop noTheme = true, and not print the warning."), /*#__PURE__*/React.createElement(Second, null));
}