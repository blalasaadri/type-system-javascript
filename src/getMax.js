const getMax = (a, b) => {
  const typeOfA = typeof a
  const typeOfB = typeof b
  if (typeOfA !== typeOfB) {
    throw new Error(`Cannot compare type ${typeOfA} with ${typeOfB}`)
  }
  if (typeOfA === "object") {
    return JSON.stringify(a) > JSON.stringify(b) ? a : b
  }
  return a > b ? a : b
}

export { getMax }
