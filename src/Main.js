import React from 'react'
import './master.css'

import ProgressBar from './components/ProgressBar'

import Intro from './components/pages/Intro'
import IntroSurvey from './components/pages/IntroSurvey'
import Article from './components/article/Article'
import ArticleSurvey from './components/article/ArticleSurvey'
import Outro from './components/pages/Outro'

import util from './util/general'
import touch from './util/touch'

import typo from './res/typo.json'

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
    window.scrollTo(0, 0)

    if (i <= 1) {
      this.setState({ introSurvey: callback })
    }

    if (i > 1 && i < 16) {
      if (i >= 8 && this.state.testType === "font") {
        this.setState({
          fastestFont: util.getFastestFont(this.state.articleData),
          testType: "size"
        })
      }

      //Article
      if ((i % 2) === 0) {
        let articleData = {
          startTime: callback.startTime,
          endTime: callback.endTime,
          speed: callback.speed,
          rawSpeed: callback.rawSpeed,

          readArticle: callback.readArticle,
          readFont: callback.readFont,
          readFontString: callback.readFontString,

          readSize: callback.readSize,
          readSizeString: callback.readSizeString,

          touch: touch.getArray(),
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
    let readArticles = this.state.readArticles

    //Fontimport
    page.push(<link
      key="FontLink"
      href={typo.mainFont}
      rel="stylesheet" />
    )

    //ProgressBar
    page.push(<ProgressBar
      key="ProgressBar"
      elementIndex={i} />
    )

    //Intro
    if (i === 0)
      page.push(<Intro
        key="Intro"
        onNext={this.onNext} />
      )

    //Intro Survey  
    if (i === 1)
      page.push(<IntroSurvey
        key="IntroSurvey"
        onNext={this.onNext} />
      )

    //Article  
    if (i > 1 && i < 16) {
      if ((i % 2) === 0) {
        console.log(this.state)
        page.push(<div
          key={"TouchHandler_" + i}
          onTouchStart={touch.touchStart}
          onTouchMove={touch.touchMove}
          onTouchEnd={touch.touchEnd}>
          <Article
            key={"Article_" + i}
            readArticles={this.state.readArticles}
            readFonts={this.state.readFonts}
            readSizes={this.state.readSizes}
            fastestFont={this.state.fastestFont}
            testType={this.state.testType}
            onNext={this.onNext} />
        </div>)

        //Article Survey
      } else {
        page.push(
          <ArticleSurvey
            key={"ArticleSurvey_" + i}
            testType={this.state.testType}
            currentArticle={readArticles[readArticles.length - 1]}
            onNext={this.onNext} />
        )
      }
    }

    //Outro
    if (i === 16) {
      page.push(<Outro
        key="Outro"
        mainState={this.state} />
      )
    }

    //Alert when leaving page
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault()
      event.returnValue = '' 
    })

    return page
  }
}
export default Main