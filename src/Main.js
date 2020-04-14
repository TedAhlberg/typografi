import React from 'react'
import './Main.css'

import ProgressBar from './elements/ProgressBar'

import Intro from './pages/Intro'
import IntroSurvey from './pages/IntroSurvey'
import Article from './article/Article'
import ArticleSurvey from './article/ArticleSurvey'
import Outro from './pages/Outro'

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
      if (i >= 8 && this.state.testType === "font") {
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

          readSize: callback.readSize,
          readSizeString: callback.readSizeString,

          touch: touch.getArrays(),
          testType: this.state.testType
        }

        if (this.state.testType === "font") {
          this.setState({
            articleData: this.state.articleData.concat(articleData),
            readArticles: this.state.readArticles.concat(callback.readArticle),
            readFonts: this.state.readFonts.concat(callback.readFont)
          })
        }
        if (this.state.testType === "size") {
          this.setState({
            articleData: this.state.articleData.concat(articleData),
            readArticles: this.state.readArticles.concat(callback.readArticle),
            readSizes: this.state.readSizes.concat(callback.readSize)
          })
        }

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
    let page = []
    let i = this.state.elementIndex
    //ProgressBar
    page.push(<ProgressBar elementIndex={i}/>)

    //Intro
    if (i === 0)
      page.push(<Intro onNext={this.onNext} />)

    //Intro Survey  
    if (i === 1)
      page.push(<IntroSurvey onNext={this.onNext} />)

    //Article  
    if (i > 1 && i < 16) {
      if ((i % 2) === 0) {
        console.log(this.state)
        page.push(<div
          onTouchStart={touch.touchStart}
          onTouchMove={touch.touchMove}
          onTouchEnd={touch.touchEnd}>
          <Article
            readArticles={this.state.readArticles}
            readFonts={this.state.readFonts}
            readSizes={this.state.readSizes}
            fastestFont={this.state.fastestFont}
            testType={this.state.testType}
            onNext={this.onNext} />
        </div>)

        //Article Survey
      } else {
        page.push (
          <ArticleSurvey
            testType={this.state.testType}
            onNext={this.onNext} />
        )
      }
    }

    //Outro
    if (i === 16) {
      page.push(<Outro introSurvey={this.state.introSurvey} />)
    }

    return page
  }
}
export default Main