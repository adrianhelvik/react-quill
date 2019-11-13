export default function flatten(array) {
  return flatten.rec(array, [])
}

flatten.rec = function flatten(array, result) {
  for (let item of array) {
    if (Array.isArray(item)) {
      flatten(item, result)
    } else {
      result.push(item)
    }
  }
  return result
}
