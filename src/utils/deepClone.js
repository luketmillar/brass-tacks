const deepClone = a => {
  if (a === null) {
    return null
  }

  const a_typeOf = typeof a
  if (a_typeOf === 'object') {
    if (Array.isArray(a)) {
      const a_copy = []
      for (let i = 0; i < a.length; i++) {
        a_copy[i] = deepClone(a[i])
      }
      return a_copy
    } else {
      const a_copy = {}
      const a_keys = Object.keys(a)
      for (let i = 0; i < a_keys.length; i++) {
        a_copy[a_keys[i]] = deepClone(a[a_keys[i]])
      }
      return a_copy
    }
  } else {
    return a
  }
}

export default deepClone
