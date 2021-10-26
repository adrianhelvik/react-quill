import React, { useState, useCallback, useEffect } from 'react';
import ReactQuill from '../lib.js';
export default function First() {
  const [startTime] = useState(new Date());
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [disableBold, setDisableBold] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const [value, setValue] = useState(null);
  const options = {
    modules: {
      toolbar: [[disableBold ? null : 'bold', 'italic', 'underline'].filter(Boolean), // toggled buttons
      [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        script: 'sub'
      }, {
        script: 'super'
      }], // superscript/subscript
      [{
        header: [1, 2, 3, 4, 5, false]
      }], [{
        align: []
      }], ['link', 'image', 'video'], ['clean'] // remove formatting button
      // ['formula'], Requires window.katex to be set
      ],
      clipboard: {
        matchVisual: false
      }
    },
    placeholder: '',
    theme: 'snow'
  };

  const reset = () => setValue(null);

  useEffect(() => {
    setInterval(() => {
      const seconds = Math.floor((new Date() - startTime) / 1000);
      setTimePassed(seconds);
    }, 100);
  }, [startTime, setTimePassed]);
  const onChange = useCallback(contents => {
    if (disableBold) {
      setValue({
        ops: contents.ops.map(x => {
          x = { ...x
          };

          if (x && x.attributes && x.attributes.bold) {
            x.attributes = { ...x.attributes
            };
            delete x.attributes.bold;

            if (!Object.keys(x.attributes).length) {
              delete x.attributes;
            }
          }

          return x;
        })
      });
    } else {
      setValue(contents);
    }
  }, [disableBold]);

  const toggleDisableBold = e => {
    setDisableBold(e.target.checked);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactQuill, {
    value: value,
    onChange: onChange,
    placeholder: `${placeholder} (${timePassed}s)`,
    options: options
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Result:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(value, null, 2)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: reset
  }, "Reset"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: disableBold,
    onChange: toggleDisableBold
  }), ' ', "Disable bold"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    value: placeholder,
    onChange: e => setPlaceholder(e.target.value)
  }));
}