var startArray = [], endArray = []
var latestMove

const touchStart = (event) => {
  startArray.push({
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  })
}

const touchMove = (event) => {
  latestMove = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  }
}

const touchEnd = () => {
  if (latestMove !== undefined)
    endArray.push({
      x: latestMove.x,
      y: latestMove.y
    })
}

const getArrays = () => {
  return ({
    start_array: startArray,
    end_array: endArray
  })
}

export default { touchStart, touchMove, touchEnd, getArrays }