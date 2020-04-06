import React from 'react';
import './Main.css';

import Touch from './touchHandler'

import Intro from './intro/Intro'
import IntroSurvey from './intro/IntroSurvey'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elementShowing: 0,
    }
  }

  onNext = (callback) => {
    var res = {
      info: callback,
      touches: Touch.getArrays(),
      speed: ""
    }

    var i = this.state.elementShowing
    if (i === 1) this.setState({ introSurvey: res })

    this.setState({ elementShowing: i += 1 })
    console.log(this.state)
  }

  render() {
    let i = this.state.elementShowing
    if (i === 0)
      return (<Intro onNext={this.onNext} />)

    if (i === 1)
      return (<IntroSurvey onNext={this.onNext} />)

    if (i > 1 && i < 5) { console.log(this.state) }
    return (
      <div
        onTouchStart={Touch.touchStart}
        onTouchMove={Touch.touchMove}
        onTouchEnd={Touch.touchEnd}>

      </div>
    )
  }
}
export default Main;