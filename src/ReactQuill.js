import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import React, { useState } from 'react'
import useQuill from './useQuill.js'

function ReactQuill({
  disallowColors,
  uploadImage,
  placeholder,
  onChange,
  noTheme,
  options,
  value,
}) {
  const [element, setElement] = useState()

  useQuill({
    disallowColors,
    placeholder,
    uploadImage,
    onChange,
    noTheme,
    options,
    element,
    value,
  })

  return <div ref={setElement} />
}

export default ReactQuill
