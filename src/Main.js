import React from 'react';
import './Main.css';

import flowHandler from './flowHandler';

import Intro from './intro/Intro'
import IntroSurvey from './intro/IntroSurvey'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elementShowing: 0
    }
  }

  onNext = () => {
    var i = this.state.elementShowing
    this.setState({elementShowing: flowHandler(i)})
  }

  render() {
    switch (this.state.elementShowing) {
      case 0: return (<Intro onNext={this.onNext} />)
      case 1: return (<IntroSurvey onNext={this.onNext} />)

      default: return ("")
    }
  }
}
export default Main;