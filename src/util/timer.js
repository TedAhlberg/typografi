var date, startTime, endTime

const start = () => {
  date = new Date()
  startTime = date.getTime()
}

const stop = () => {
  date = new Date()
  endTime = date.getTime()
  let time = endTime - startTime
  return time
}

const formatTime = (time) => {
  let tempDate = new Date(time)
  let H = tempDate.getUTCHours()
  let M = tempDate.getUTCMinutes()
  let S = tempDate.getSeconds()
  let s = tempDate.getMilliseconds()

  return (
    H.toString().padStart(2, '0') + ':' +
    M.toString().padStart(2, '0') + ':' +
    S.toString().padStart(2, '0') + '.' +
    s.toString().padStart(2, '0')
  )
}
export default { start, stop, formatTime}