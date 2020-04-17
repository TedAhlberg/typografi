import React from 'react'

class Outro extends React.Component {
  render() {
    return (
      <div>
        <h1>outro</h1>
        <span>
          {this.props.introSurvey.browserPlatform}
        </span>
      </div>
    )
  }
}
export default Outro