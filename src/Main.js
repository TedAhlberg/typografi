import React from 'react'
import './Main.css'

import Intro from './intro/Intro'
import IntroSurvey from './intro/IntroSurvey'
import Article from './article/Article'
import ArticleSurvey from './article/ArticleSurvey'

import util from './util/general'
import touch from './util/touch'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elementIndex: 0,
      articleData: [],
      surveyData: [],

      readArticles: [],
      readFonts: [],
      readSizes: [],
      testType: "font",
      fastestFont: ""
    }
  }

  onNext = (callback) => {
    var i = this.state.elementIndex

    if (i <= 1) {
      this.setState({ introSurvey: callback })
    }

    if (i > 1 && i < 15) {
      if (i >= 9 && this.state.testType === "font") {
        console.log("changed testType")
        this.setState({ 
          fastestFont: util.getFastestFont(this.state.articleData),
          testType: "size" 
        })
      }

      //Article
      if ((i % 2) === 0) {
        let articleData = {
          speed: callback.speed,
          rawSpeed: callback.rawSpeed,
          readArticle: callback.readArticle, 
          readFont: callback.readFont,
          readFontString: callback.readFontString,
          touch: touch.getArrays(),
          testType: this.state.testType
        }
        this.setState({
          articleData: this.state.articleData.concat(articleData),
          readArticles: this.state.readArticles.concat(callback.readArticle),
          readFonts: this.state.readFonts.concat(callback.readFont),
          readSizes: this.state.readSizes.concat(callback.readSize)
        })

        //ArticleSurvey
      } else {
        this.setState({
          surveyData: this.state.surveyData.concat(callback)
        })
      }
    }

    this.setState({ elementIndex: i += 1 })
    console.log(this.state)
  }

  render() {
    let i = this.state.elementIndex
    if (i === 0)
      return (<Intro onNext={this.onNext} />)

    if (i === 1)
      return (<IntroSurvey onNext={this.onNext} />)

    if (i > 1 && i < 15) {
      if ((i % 2) === 0) {
        return (<div
          onTouchStart={touch.touchStart}
          onTouchMove={touch.touchMove}
          onTouchEnd={touch.touchEnd}>
          <Article
            readArticles={this.state.readArticles}
            readFonts={this.state.readFonts}
            testType={this.state.testType}
            onNext={this.onNext} />
        </div>
        )
      } else {
        return (
          <ArticleSurvey
            testType={this.state.testType}
            onNext={this.onNext} />
        )
      }
    }
  }
}
export default Main;