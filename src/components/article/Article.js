import React from 'react'
import './Article.css'

import util from '../../util/general'
import timer from '../../util/timer'

import articles from '../../res/articles.json'
import typo from '../../res/typo.json'

class Article extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.testType === "font") {
      this.state = {
        currentArticle: this.getCurrentArticle(),
        currentFont: this.getCurrentFont(),
        currentSize: typo.defaultSize,
        startTime: timer.start()
      }
    }

    if (this.props.testType === "size") {
      this.state = {
        currentArticle: this.getCurrentArticle(),
        currentFont: this.props.fastestFont,
        currentSize: this.getCurrentSize(),
        startTime: timer.start()
      }
      console.log("size: " + typo.sizes[this.state.currentSize])
      document.documentElement.style.setProperty(
        '--main-article-size',
        typo.sizes[this.state.currentSize]
      )
    }
    
    document.documentElement.style.setProperty(
      '--main-article-font',
      typo.fonts[this.state.currentFont]
    )

    //debug
    let log = {
      article: this.state.currentArticle,
      font: typo.fonts[this.state.currentFont]
    }
    console.log(log)
  }

  getCurrentArticle = () => {
    console.log("readArticles: " + this.props.readArticles)
    return util.getRandomElementFrom(
      this.props.readArticles, articles.length
    )
  }

  getCurrentFont = () => {
    console.log("readFonts: " + this.props.readFonts)
    return util.getRandomElementFrom(
      this.props.readFonts, typo.fonts.length
    )
  }

  getCurrentSize = () => {
    console.log("readSizes: " + this.props.readSizes)
    return util.getRandomElementFrom(
      this.props.readSizes, typo.sizes.length
    )
  }

  genereateParagraphs = () => {
    let i = this.state.currentArticle
    let paragraphs = articles[i].text
    let elements = []
    for (let p in paragraphs)
      elements.push(<p key={p}
        className="article">{paragraphs[p]}</p>)
    return elements
  }

  onNext = () => {
    let endTime = timer.stop()
    let speed = timer.speed()

    let callback = {
      startTime: this.state.startTime,
      endTime: endTime,
      speed: timer.formatTime(speed),
      rawSpeed: speed,

      readArticle: this.state.currentArticle,

      readFont: this.state.currentFont,
      readFontString: typo.fonts[this.state.currentFont],

      readSize: this.state.currentSize,
      readSizeString: typo.sizes[this.state.currentSize]
    }
    this.props.onNext(callback)
  }

  render() {
    return (
      <div>
        <h1>{articles[this.state.currentArticle].title}</h1>
        {this.genereateParagraphs()}

        <button onClick={this.onNext}>
          Klar
        </button>
      </div>
    )
  }
}
export default Article