var touchArray = [],
  startToEndArray = [],
  lastTime = 0,
  latestMove = ""

const touchStart = (event) => {
  let time = new Date().getTime()
  let start = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY,
    time: time
  }
  touchArray.push({
    start: start
  })
  lastTime = time
}

const touchMove = (event) => {
  let time = new Date().getTime()
  if (lastTime + 200 < time) {
    lastTime = time
    latestMove = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    }

    startToEndArray.push(latestMove)
    console.log(latestMove)
  }
}

const touchEnd = () => {
  if (latestMove !== undefined) {
    let end = {
      x: latestMove.x,
      y: latestMove.y,
      time: new Date().getTime()
    }

    touchArray[touchArray.length - 1].end = end
    touchArray[touchArray.length - 1].startToEnd = startToEndArray
  }
}

const getArray = () => {
  let temp = touchArray
  touchArray = []
  return temp
}

export default {
  touchStart,
  touchMove,
  touchEnd,
  getArray
}