import { useEffect } from 'react'

function useQuillOnChange(quill, onChange) {
  useEffect(() => {
    if (!quill) return
    if (typeof onChange !== 'function') return

    let handler
    quill.on(
      'text-change',
      (handler = () => {
        onChange(quill.getContents())
      }),
    )

    return () => {
      quill.off('text-change', handler)
    }
  }, [quill, onChange])
}

export default useQuillOnChange
