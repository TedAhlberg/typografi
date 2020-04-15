import React from 'react'
import './ProgressBar.css'

class ProgressBar extends React.Component {
  getProgressWidth() {
    const PAGES = 16
    let index = this.props.elementIndex
    let percent = Math.floor((index / PAGES) * 100)
    return percent + "%"
  }

  render() {
    return (
      <div id="progress-bar-outline">
        <div id="progress-bar-inline"
          style={{ width: this.getProgressWidth() }}
        />
      </div>
    )
  }
}
export default ProgressBar