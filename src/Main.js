import React from 'react'
import './Main.css'

import Intro from './intro/Intro'
import IntroSurvey from './intro/IntroSurvey'
import Article from './article/Article'

import touch from './util/touchHandler'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elementShowing: 0,
      readArticles: [],
      readFonts: []
    }
  }

  onNext = (callback) => {
    var res = {
      info: callback,
      touches: touch.getArrays()
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
        onTouchStart={touch.touchStart}
        onTouchMove={touch.touchMove}
        onTouchEnd={touch.touchEnd}>
          <Article 
            readArticles={this.state.readArticles}
            readFonts={this.state.readFonts}
            onNext={this.onNext}
          />
      </div>
    )
  }
}
export default Main;