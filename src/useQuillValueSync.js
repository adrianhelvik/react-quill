import { useEffect, useState } from 'react'
import deepEqual from './deepEqual.js'

function useQuillValueSync(quill, value) {
  const [selection, setSelection] = useState(null)

  useEffect(() => {
    if (!quill) return

    const previous = quill.getContents()
    const current = value

    if (!deepEqual(previous, current)) {
      setSelection(quill.getSelection())
      if (typeof value === 'string') {
        quill.clipboard.dangerouslyPasteHTML(value, 'api')
      } else {
        quill.setContents(value)
      }
    }
  }, [quill, value, setSelection])

  useEffect(() => {
    if (quill && selection) {
      quill.setSelection(selection)
      setSelection(null)
    }
  }, [quill, selection, setSelection])
}

export default useQuillValueSync
