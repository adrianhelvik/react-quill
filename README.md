# @adrianhelvik/react-quill

An bridge between React and Quill. Implemented using hooks and React 17 compatible APIs.

The project is still in an early phase, and I hope it can be used as a basis for the next
version of `react-quill`.

## Usage with katex

To use with `katex`, add a cdn script tag. The editor will not load if
the formula module is used and `window.katex` is unavailable.

## Installation

```bash
npm install @adrianhelvik/react-quill quill
```

## Full fledged example

```javascript
import React, { useState, useCallback, useEffect } from 'react'
import ReactQuill from '@adrianhelvik/react-quill'
import ReactDOM from 'react-dom'

function Wrapper() {
  const [startTime] = useState(new Date())
  const [placeholder, setPlaceholder] = useState('Placeholder')
  const [disableBold, setDisableBold] = useState(false)
  const [timePassed, setTimePassed] = useState(0)
  const [value, setValue] = useState(null)

  const options = {
    modules: {
      toolbar: [
        [disableBold ? null : 'bold', 'italic', 'underline'].filter(Boolean), // toggled buttons
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ header: [1, 2, 3, 4, 5, false] }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean'], // remove formatting button
        // ['formula'], Requires window.katex to be set
      ],
      clipboard: {
        matchVisual: false,
      },
    },
    placeholder: '',
    theme: 'snow',
  }

  const reset = () => setValue(null)

  useEffect(() => {
    setInterval(() => {
      const seconds = Math.floor((new Date() - startTime) / 1000)
      setTimePassed(seconds)
    }, 100)
  }, [startTime, setTimePassed])

  const onChange = useCallback(
    contents => {
      if (disableBold) {
        setValue({
          ops: contents.ops.map(x => {
            x = { ...x }
            if (x && x.attributes && x.attributes.bold) {
              x.attributes = { ...x.attributes }
              delete x.attributes.bold
              if (!Object.keys(x.attributes).length) {
                delete x.attributes
              }
            }
            return x
          }),
        })
      } else {
        setValue(contents)
      }
    },
    [disableBold],
  )

  const toggleDisableBold = e => {
    setDisableBold(e.target.checked)
  }

  return (
    <>
      <ReactQuill
        value={value}
        onChange={onChange}
        placeholder={`${placeholder} (${timePassed}s)`}
        options={options}
      />
      <br />
      <br />
      <br />
      Result:
      <br />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <br />
      <button type="button" onClick={reset}>
        Reset
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={disableBold}
          onChange={toggleDisableBold}
        />{' '}
        Disable bold
      </label>
      <br />
      <br />
      <input
        value={placeholder}
        onChange={e => setPlaceholder(e.target.value)}
      />
    </>
  )
}

ReactDOM.render(<Wrapper />, document.querySelector('#root'))
```
