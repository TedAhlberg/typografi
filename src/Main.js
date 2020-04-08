import React from 'react'
import './Main.css'

import Intro from './intro/Intro'
import IntroSurvey from './intro/IntroSurvey'
import Article from './article/Article'
import ArticleSurvey from './article/ArticleSurvey'

import touch from './util/touchHandler'

import typo from './res/typo.json'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elementShowing: 0,
      articleData: [],
      readArticles: [],
      readFonts: [],
    }
  }

  onNext = (callback) => {
    var i = this.state.elementShowing

    if (i <= 1) {
      this.setState({ introSurvey: callback })
    }

    if (i > 1 && i < 15) {
      //Article
      if ((i % 2) === 0) {
        console.log("article")

        let readFont = typo.fonts[callback.readFont]

        let data = {
          speed: "",
          touch: touch.getArrays()
        }
        this.setState({
          articleData: this.state.articleData.concat(data),
          readArticles: this.state.readArticles.concat(callback.readArticle),
          readFonts: this.state.readFonts.concat(readFont)
        })
      //ArticleSurvey
      } else {
        console.log("articleSurvey")
      }
    }

    this.setState({ elementShowing: i += 1 })
    console.log(this.state)
  }

  render() {
    let i = this.state.elementShowing
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
            onNext={this.onNext} />
        </div>
        )
      } else {
        console.log(this.state)
        return (
          <ArticleSurvey
            onNext={this.onNext} />
        )
      }
    }
  }
}
export default Main;