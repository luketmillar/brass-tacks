const deepEqual = (a, b) => {
  if (a === b) {
    return true
  }
  if ((a == null && b != null) || (a != null && b == null)) {
    return false
  }
  const a_type = typeof a
  const b_type = typeof b
  if (a_type !== b_type) {
    return false
  }
  if (a_type === 'object') {
    const a_isArray = Array.isArray(a)
    const b_isArray = Array.isArray(b)
    if (a_isArray !== b_isArray) {
      return false
    }
    if (a_isArray) {
      if (a.length !== b.length) {
        return false
      }
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) {
          return false
        }
      }
    } else {
      const a_keys = Object.keys(a)
      const b_keys = Object.keys(b)
      if (a_keys.length !== b_keys.length) {
        return false
      }
      const keysSet = {}
      for (let i = 0; i < a_keys.length; i++) {
        keysSet[a_keys[i]] = true
      }
      for (let i = 0; i < b_keys.length; i++) {
        keysSet[b_keys[i]] = true
      }
      const u_keys = Object.keys(keysSet)
      for (let i = 0; i < u_keys.length; i++) {
        const key = u_keys[i]
        if (!deepEqual(a[key], b[key])) {
          return false
        }
      }
    }
    return true
  }
  return false
}

export default deepEqual
