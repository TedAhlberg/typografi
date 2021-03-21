const getRandomElementFrom = (array, size) => {
  let index = Math.floor(Math.random() * size)
  while (array.includes(index)) {
    index++
    if (index >= size)
      index = 0
  }
  return index
}

const getFastestFont = (articleData) => {
  // För bara Arial
  return 1

  // För snabbast font
  // let fastestFont = Infinity, fontIndex
  // for (var i = 0; i < articleData.length; i++) {
  //   if (fastestFont > articleData[i].rawSpeed) {
  //     fastestFont = articleData[i].rawSpeed
  //     fontIndex = i
  //   }
  // }
  // return articleData[fontIndex].readFont 
}

export default { getRandomElementFrom, getFastestFont }