import React from 'react'
import emailjs from 'emailjs-com'

import paramTemplate from '../../util/paramTemplate'

const SERVICE_ID = "exata20_gmail_com"
const TEMPLATE_ID = "template_VY0SChsJ"
const USER_ID = "user_SpYkQtNTsh3czOGPPysSG"

class Outro extends React.Component {
  constructor(props) {
    super(props)
    let res = paramTemplate.get(this.props.mainState)
    console.log(res)
    // uncomment before deploy
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, res, USER_ID)
  }

  render() {
    return (
      <div>
        <h1>Tack så mycket för ditt deltagande!</h1>
      </div>
    )
  }
}
export default Outro