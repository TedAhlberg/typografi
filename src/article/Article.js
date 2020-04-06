import React from 'react'

import articles from '../res/articles.json'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentArticle: this.getCurrentArticle()
    }
    this.getCurrentFont()
  }

  getCurrentArticle = () => {
    let readArticles = this.props.readArticles
    let articleIndex = Math.floor(Math.random() * articles.length)
    while (readArticles.includes(articleIndex))
      articleIndex++
    return articleIndex
  }

  getCurrentFont = () => {

  }

  genereateParagraphs = () => {
    let i = this.state.currentArticle
    let paragraphs = articles[i].text
    let elements = []
    for (let p in paragraphs)
      elements.push(<p key={p}>{paragraphs[p]}</p>)
    return elements
  }

  onNext = () => {

  }

  render() {
    return (
      <div>
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