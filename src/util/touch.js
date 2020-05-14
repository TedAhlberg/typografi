var touchEvent = {
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0 },
  time: ""
}
var touchArray = [], latestMove = ""

const touchStart = (event) => {
  let start = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  }
  touchArray.push({ start: start })
}

const touchMove = (event) => {
  latestMove = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  }
}

const touchEnd = () => {
  if (latestMove !== undefined) {
    let end = {
      x: latestMove.x,
      y: latestMove.y
    }
    let date = new Date()
    let time = date.getTime()

    touchArray[touchArray.length - 1].end = end
    touchArray[touchArray.length - 1].time = time
  }
}

const getArray = () => {
  let temp = touchArray
  touchArray = []
  return temp
}

export default { touchStart, touchMove, touchEnd, getArray }