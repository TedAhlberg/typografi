import React from 'react'
import './Article.css'

import articles from '../res/articles.json'
import typo from '../res/typo.json'

import util from '../util/general'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentArticle: this.getCurrentArticle(),
      currentFont: this.getCurrentFont()
    }
    document.documentElement.style.setProperty(
      '--main-article-font',
      typo.fonts[this.state.currentFont]
    )

    let log = {
      article: this.state.currentArticle,
      font: typo.fonts[this.state.currentFont]
    }
    console.log(log)
  }

  getCurrentArticle = () => {
    console.log(this.props.readArticles)
    return util.getRandomElementFrom(
      this.props.readArticles, articles.length
    )
  }

  getCurrentFont = () => {
    console.log(this.props.readFonts)
    return util.getRandomElementFrom(
      this.props.readFonts, typo.fonts.length
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
    let callback = {
      speed: 0,
      readArticle: this.state.currentArticle,
      readFont: this.state.currentFont
    }
    this.props.onNext(callback)
  }

  render() {
    return (
      <div>
        {/* debug */}
    <span>({this.props.readArticles.length}/4)</span>

        <h2>{articles[this.state.currentArticle].title}</h2>
        {this.genereateParagraphs()}

        <button onClick={this.onNext}>
          Klar
        </button>
      </div>
    )
  }
}
export default Article