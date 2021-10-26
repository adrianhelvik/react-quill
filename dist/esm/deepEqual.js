function deepEqual(previous, current) {
  if (previous === current) return true;
  if (!previous && current) return false;
  if (previous && !current) return false;
  if (!previous && !current) return false;

  if (Array.isArray(previous)) {
    if (!Array.isArray(current)) return false;
    if (previous.length !== current.length) return false;

    for (let i = 0; i < previous.length; i++) {
      if (!deepEqual(current[i], previous[i])) {
        return false;
      }
    }

    return true;
  }

  if (typeof current === 'object') {
    if (typeof previous !== 'object') return false;
    const prevKeys = Object.keys(previous);
    const currKeys = Object.keys(current);
    if (prevKeys.length !== currKeys.length) return false;
    prevKeys.sort();
    currKeys.sort();

    for (let i = 0; i < prevKeys.length; i++) {
      if (prevKeys[i] !== currKeys[i]) return false;
      const key = prevKeys[i];
      if (!deepEqual(previous[key], current[key])) return false;
    }

    return true;
  }

  return false;
}

export default deepEqual;