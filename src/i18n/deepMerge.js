function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

/** Deep-merge plain objects; arrays and primitives from `b` replace `a`. */
export function deepMerge(a, b) {
  if (!isPlainObject(a)) return b !== undefined ? b : a
  const out = { ...a }
  if (!isPlainObject(b)) return out
  for (const key of Object.keys(b)) {
    if (key in out && isPlainObject(out[key]) && isPlainObject(b[key])) {
      out[key] = deepMerge(out[key], b[key])
    } else {
      out[key] = b[key]
    }
  }
  return out
}
