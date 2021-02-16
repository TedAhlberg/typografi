import React from 'react'

import paramTemplate from '../../util/paramTemplate'
import database from '../../util/database'

class Outro extends React.Component {
  constructor(props) {
    super(props)
    let res = paramTemplate.get(this.props.mainState)
    database.sendResults(res)
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