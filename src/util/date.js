const getDateString = () => {
  let dateObject = new Date()
  let year = dateObject.getFullYear()
  let month = ('0' + (dateObject.getMonth() + 1)).slice(-2)
  let date = ('0' + dateObject.getDate()).slice(-2)

  return year + "-" + month + "-" + date
}

export default {
  getDateString
}