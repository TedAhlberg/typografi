import React from 'react'
import './ProgressBar.css'

class ProgressBar extends React.Component {
  setProgressBar(elementIndex){
    const PAGES = 16
    let percent = Math.floor((elementIndex/PAGES) * 100)
    document.documentElement.style.setProperty(
      '--progress-bar-width', percent + "%"
    )
  }

  render() {
    this.setProgressBar(this.props.elementIndex)

    return (
      <div id="progress-bar-outline">
        <div id="progress-bar-inline" />
      </div>
    )
  }
}
export default ProgressBar