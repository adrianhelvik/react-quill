import useDeepEqualMemo from './useDeepEqualMemo.js';
import { useState, useEffect, useMemo } from 'react';
import flatten from './flatten.js';
import Quill from 'quill';
export default function useMountQuill({
  uploadImage,
  options: passedOptions,
  element
}) {
  const [katexLoaded, setKatexLoaded] = useState(Boolean(window.katex));
  const [quill, setQuill] = useState(null);
  const options = useDeepEqualMemo(passedOptions);
  const toolbar = useMemo(() => {
    if (options && options.modules && options.modules.toolbar) {
      return options.modules.toolbar;
    }

    return [];
  }, [options]);
  const requiresKatex = useMemo(() => {
    return flatten(toolbar).includes('formula');
  }, [toolbar]);
  useEffect(() => {
    if (!requiresKatex) return;
    if (katexLoaded) return;
    const interval = setInterval(() => {
      if (window.katex) {
        setKatexLoaded(true);
        clearInterval(interval);
      }
    });
    return () => {
      clearInterval(interval);
    };
  }, [setKatexLoaded, katexLoaded, requiresKatex]);
  useEffect(() => {
    if (!element) return;

    if (requiresKatex && !katexLoaded) {
      element.innerHTML = '<div style="font-family: sans-serif; color: #ddd">Loading Katex...</div>';
      return;
    }

    const quillNode = document.createElement('div');
    element.appendChild(quillNode);
    const quill = new Quill(quillNode, options);
    setQuill(quill);

    if (typeof uploadImage === 'function') {
      quill.getModule('toolbar').addHandler('image', () => {
        uploadImage(quill);
      });
    }

    return () => {
      element.innerHTML = '';
    };
  }, [element, options, requiresKatex, katexLoaded, uploadImage]);
  return quill;
}