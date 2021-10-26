import { useEffect } from 'react';

function useQuillPlaceholder(quill, placeholder = '') {
  useEffect(() => {
    if (!quill || !quill.root) return;
    quill.root.dataset.placeholder = placeholder;
  }, [quill, placeholder]);
}

export default useQuillPlaceholder;