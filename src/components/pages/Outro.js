import React from 'react'
import emailjs from 'emailjs-com'

import parseState from '../../util/parseState'

const SERVICE_ID = "exata20_gmail_com"
const TEMPLATE_ID = "template_VY0SChsJ"
const USER_ID = "user_SpYkQtNTsh3czOGPPysSG"

class Outro extends React.Component {
  constructor(props) {
    super(props)
    let res = parseState.parse(this.props.mainState)

    let templateParams = {
      results: res,
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error)
      })
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