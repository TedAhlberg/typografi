import React from 'react'
import articles from './../../res/articles.json'

const VALID_INPUT = "#242424"
const INVALID_INPUT = "#c25050"

class ArticleSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  checkAnswers = () => {
    console.log()
    let rgs = [
      this.state.rg1,
      this.state.rg2,
      this.state.rg3,
    ]
    for (var i = 0; i < rgs.length; i++) {
      let id = "Rg" + (i + 1)
      if (rgs[i] === undefined) {
        document.getElementById("a" + id)
          .style.color = INVALID_INPUT
        this.setState({ ["b" + id]: false })
      } else {
        document.getElementById("a" + id)
          .style.color = VALID_INPUT
        this.setState({ ["b" + id]: true })
      }
    }

    return (this.state.rg1 && this.state.rg2 && this.state.rg3)
  }

  onNext = () => {
    // uncomment before deploy
    if(this.checkAnswers())
      this.props.onNext(this.state)
  }

  handleOptionChange = (changeEvent) => {
    let radioGroup = changeEvent.target.name
    this.setState({ [radioGroup]: changeEvent.target.value })
  }

  render() {
    let page = []
    let currentArticle = this.props.currentArticle

    let question = (
      <div>
        <span id="aRg1">
          {articles[currentArticle].surveyQuestion}
        </span>
        <div className="radioGroup">
          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="1"
              className="radioChoice"
              checked={this.state.rg1 === "1"}
              onChange={this.handleOptionChange} />
            <span>{articles[currentArticle].surveyAnswers[0]}</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="2"
              className="radioChoice"
              checked={this.state.rg1 === "2"}
              onChange={this.handleOptionChange} />
            <span>{articles[currentArticle].surveyAnswers[1]}</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="3"
              className="radioChoice"
              checked={this.state.rg1 === "3"}
              onChange={this.handleOptionChange} />
            <span>{articles[currentArticle].surveyAnswers[2]}</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="4"
              className="radioChoice"
              checked={this.state.rg1 === "4"}
              onChange={this.handleOptionChange} />
            <span>{articles[currentArticle].surveyAnswers[3]}</span>
          </div>
        </div>
      </div>
    )

    if (this.props.testType === "font") {
      return (
        <div id="surveyContainer">
          <h1>Artikelenkät</h1>
          <h2>{articles[currentArticle].title}</h2>

          {question}

          <span id="aRg2">
            Hur estetiskt tilltalande skulle du säga att föregånde typsnittet var?
          </span>
          <div className="radioGroup">
            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="1"
                className="radioChoice"
                checked={this.state.rg2 === "1"}
                onChange={this.handleOptionChange} />
              <span>Mycket tilltalande</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="2"
                className="radioChoice"
                checked={this.state.rg2 === "2"}
                onChange={this.handleOptionChange} />
              <span>Ganska tilltalande</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="3"
                className="radioChoice"
                checked={this.state.rg2 === "3"}
                onChange={this.handleOptionChange} />
              <span>Lite tilltalande</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="4"
                className="radioChoice"
                checked={this.state.rg2 === "4"}
                onChange={this.handleOptionChange} />
              <span>Inte alls tilltalande</span>
            </div>
          </div>

          <span id="aRg3">
            Hur lättläst skulle du säga att föregånde typsnittet var?
          </span>
          <div className="radioGroup">
            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="1"
                className="radioChoice"
                checked={this.state.rg3 === "1"}
                onChange={this.handleOptionChange} />
              <span>Mycket lättläst</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="2"
                className="radioChoice"
                checked={this.state.rg3 === "2"}
                onChange={this.handleOptionChange} />
              <span>Ganska lättläst</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="3"
                className="radioChoice"
                checked={this.state.rg3 === "3"}
                onChange={this.handleOptionChange} />
              <span>Lite lättläst</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="4"
                className="radioChoice"
                checked={this.state.rg3 === "4"}
                onChange={this.handleOptionChange} />
              <span>Inte alls lättläst</span>
            </div>
          </div>

          <button onClick={this.onNext}>
            Nästa artikel
          </button>
        </div>
      )
    }
    else {
      return (
        <div id="surveyContainer">
          <h1>Artikelenkät</h1>
          <h2>{articles[currentArticle].title}</h2>
          {question}

          <span id="aRg2">
            Hur estetiskt tilltalande skulle du säga att storleken på föregånde typsnittet var?
          </span>
          <div className="radioGroup">
            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="1"
                className="radioChoice"
                checked={this.state.rg2 === "1"}
                onChange={this.handleOptionChange} />
              <span>Mycket tilltalande</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="2"
                className="radioChoice"
                checked={this.state.rg2 === "2"}
                onChange={this.handleOptionChange} />
              <span>Ganska tilltalande</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="3"
                className="radioChoice"
                checked={this.state.rg2 === "3"}
                onChange={this.handleOptionChange} />
              <span>Lite tilltalande</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg2" value="4"
                className="radioChoice"
                checked={this.state.rg2 === "4"}
                onChange={this.handleOptionChange} />
              <span>Inte alls tilltalande</span>
            </div>
          </div>

          <span id="aRg3">
            Hur lättläst skulle du säga att storleken på föregående typsnittet var?
          </span>
          <div className="radioGroup">
            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="1"
                className="radioChoice"
                checked={this.state.rg3 === "1"}
                onChange={this.handleOptionChange} />
              <span>Mycket lättläst</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="2"
                className="radioChoice"
                checked={this.state.rg3 === "2"}
                onChange={this.handleOptionChange} />
              <span>Ganska lättläst</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="3"
                className="radioChoice"
                checked={this.state.rg3 === "3"}
                onChange={this.handleOptionChange} />
              <span>Lite lättläst</span>
            </div>

            <div className="radioChoiceContainer">
              <input type="radio" name="rg3" value="4"
                className="radioChoice"
                checked={this.state.rg3 === "4"}
                onChange={this.handleOptionChange} />
              <span>Inte alls lättläst</span>
            </div>
          </div>

          <button onClick={this.onNext}>
            Nästa artikel
          </button>
        </div>
      )
    }
  }
}
export default ArticleSurvey