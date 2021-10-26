import Quill from '../lib';
export default function ClassAndStyle() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Class and style"), /*#__PURE__*/React.createElement("p", null, "In this example, we'll add a className and style to Quill."), /*#__PURE__*/React.createElement("style", null, '.my-classy-quill { background-color: pink }'), /*#__PURE__*/React.createElement(Quill, {
    className: "my-classy-quill",
    value: "Hello Quill!",
    style: {
      padding: 20
    }
  }));
}