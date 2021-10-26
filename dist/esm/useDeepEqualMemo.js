import { useState, useEffect } from 'react';
import deepEqual from './deepEqual';

function useDeepEqual(input) {
  const [value, setValue] = useState(input);
  useEffect(() => {
    if (!deepEqual(input, value)) {
      setValue(input);
    }
  }, [input, value]);
  return value;
}

export default useDeepEqual;