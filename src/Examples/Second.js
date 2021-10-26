import { useState } from 'react'
import Quill from '../lib'

export default function Second() {
  const [value, setValue] = useState(null)
  const [html, setHtml] = useState(null)

  return (
    <>
      <h3>Should print warning:</h3>
      <Quill value={value} onChange={value => setValue(value)} />
      <h3>Should not print warning:</h3>
      <Quill
        value={value}
        onChange={(value, html) => {
          setValue(value)
          setHtml(html)
        }}
        noTheme
      />
      <h3>Result:</h3>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <h3>Resulting html:</h3>
      <pre>{html}</pre>
    </>
  )
}
