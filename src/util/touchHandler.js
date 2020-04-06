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
  endArray.push({ latestMove })
}

const getArrays = () => {
  return ({
    start_array: startArray,
    end_array: endArray
  })
}

export default { touchStart, touchMove, touchEnd, getArrays }