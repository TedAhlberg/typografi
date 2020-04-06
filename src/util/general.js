const getRandomElementFrom = (array, size) => {
  let index = Math.floor(Math.random() * size)
  while (array.includes(index)) {
    index++
    if (index > size)
      index = 0
  }
  return index
}

export default {getRandomElementFrom}