var touchArray = [],
  startToEndArray = [],
  lastTime = 0,
  latestMove = ""

var zoom = false,
  pinchStart,
  pinchMove,
  pinchEnd,
  zoomArray = []

const touchStart = (event) => {
  let time = new Date().getTime()
  let start = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY,
    scrollY: window.scrollY,
    time: time
  }
  touchArray.push({
    start: start
  })
  lastTime = time

  //pinchStart
  if (event.touches.length === 2) {
    zoom = true
    pinchStart = {
      point1: {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      },
      point2: {
        x: event.touches[1].clientX,
        y: event.touches[1].clientY
      }
    }
  }
}

const touchMove = (event) => {
  let time = new Date().getTime()
  if (lastTime + 200 < time) {
    lastTime = time
    latestMove = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
      scrollY: window.scrollY
    }

    startToEndArray.push(latestMove)
    // console.log(latestMove)

    //pinchMove
    if (zoom) {
      pinchMove = {
        point1: {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        },
        point2: {
          x: event.touches[1].clientX,
          y: event.touches[1].clientY
        }
      }
    }
  }
}

const touchEnd = () => {
  if (latestMove !== undefined) {
    let end = {
      x: latestMove.x,
      y: latestMove.y,
      scrollY: window.scrollY,
      time: new Date().getTime()
    }

    touchArray[touchArray.length - 1].end = end
    touchArray[touchArray.length - 1].startToEnd = startToEndArray

    if (zoom) {
      pinchEnd = {
        point1: {
          x: pinchMove.point1.x,
          y: pinchMove.point1.y
        },
        point2: {
          x: pinchMove.point2.x,
          y: pinchMove.point2.y
        }
      }

      calculateZoom()
      zoom = false
    }
  }
}

const calculateZoom = () => {
  let dist1 = Math.hypot(
    pinchStart.point1.x - pinchEnd.point1.x,
    pinchStart.point1.y - pinchEnd.point1.y
  )
  let dist2 = Math.hypot(
    pinchStart.point2.x - pinchEnd.point2.x,
    pinchStart.point2.y - pinchEnd.point2.y
  )

  let zoomData = {
    dist1: dist1,
    dist2: dist2,
    time: new Date().getTime()
  }
  zoomArray.push(zoomData)
}

const getArray = () => {
  let temp = touchArray
  touchArray = []
  return temp
}

const getZoomArray = () => {
  let temp = zoomArray
  zoomArray = []
  return temp
}

export default {
  touchStart,
  touchMove,
  touchEnd,
  getArray,
  getZoomArray
}