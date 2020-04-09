const getRandomElementFrom = (array, size) => {
  console.log("Array: " + array)
  let index = Math.floor(Math.random() * size)
  while (array.includes(index)) {
    index++
    if (index >= size)
      index = 0
  }
  console.log("index: " + index)
  return index
}

export default {getRandomElementFrom}