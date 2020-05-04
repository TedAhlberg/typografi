import React from 'react'
import './IntroSurvey.css'

const VALID_INPUT = "#242424"
const INVALID_INPUT = "#c25050"

class IntroSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      browserName: navigator.appName,
      browserPlatform: navigator.platform
    }
  }

  checkAnswers = () => {
    //age
    let age = this.state.age
    if (age === undefined || 
        age === "" || 
        age < 0 || 
        age > 110) {
      document.getElementById("isAge")
        .style.color = INVALID_INPUT
      this.setState({ bAge: false })
    } else {
      document.getElementById("isAge")
        .style.color = VALID_INPUT
      this.setState({ bAge: true })
    }

    //rg1 & rg2
    let rgs = [
      this.state.rg1,
      this.state.rg2
    ]
    for (var i = 0; i < rgs.length; i++) {
      let id = "Rg" + (i + 1)
      if (rgs[i] === undefined) {
        document.getElementById("is" + id)
          .style.color = INVALID_INPUT
        this.setState({ ["b" + id]: false })
      } else {
        document.getElementById("is" + id)
          .style.color = VALID_INPUT
        this.setState({ ["b" + id]: false })
      }
    }

    return (this.state.age && this.state.rg1 && this.state.rg2)
  }

  onNext = () => {
    // uncomment before deploy
    if (this.checkAnswers())
      this.props.onNext(this.state)
  }

  handleOptionChange = (changeEvent) => {
    let radioGroup = changeEvent.target.name
    this.setState({ [radioGroup]: changeEvent.target.value })
  }

  handleNumberChange = (numberEvent) => {
    this.setState({ age: numberEvent.target.value.replace(/\D/, '') })
  }

  render() {
    return (
      <div id="surveyContainer">
        <h1>Inledande enkät</h1>

        <span id="isAge">
          Hur gammal är du?
        </span>
        <input type="text"
          value={this.state.number}
          onChange={this.handleNumberChange} />

        <span id="isRg1">
          Hur mycket läser du under en vecka?
        </span>
        <div className="radioGroup">
          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="1"
              className="radioChoice"
              checked={this.state.rg1 === "1"}
              onChange={this.handleOptionChange} />
            <span>Mindre än 1 timme</span>
          </div>

          <div className="radioChoiceContainer"

            onClick={this.handleOptionChange}>
            <input type="radio" name="rg1" value="2"
              className="radioChoice"
              checked={this.state.rg1 === "2"}
              onChange={this.handleOptionChange} />
            <span>1 - 3 timmar</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="3"
              className="radioChoice"
              checked={this.state.rg1 === "3"}
              onChange={this.handleOptionChange} />
            <span>3 - 6 timmar</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="4"
              className="radioChoice"
              checked={this.state.rg1 === "4"}
              onChange={this.handleOptionChange} />
            <span>6 - 10 timmar</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg1" value="5"
              className="radioChoice"
              checked={this.state.rg1 === "5"}
              onChange={this.handleOptionChange} />
            <span>Mer än 10 timmar</span>
          </div>
        </div>

        <span id="isRg2">
          Vilket format av text läser du mest av?
        </span>
        <div className="radioGroup">
          <div className="radioChoiceContainer">
            <input type="radio" name="rg2" value="1"
              className="radioChoice"
              checked={this.state.rg2 === "1"}
              onChange={this.handleOptionChange} />
            <span>Digitalt format</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg2" value="2"
              className="radioChoice"
              checked={this.state.rg2 === "2"}
              onChange={this.handleOptionChange} />
            <span>Tryckt format</span>
          </div>

          <div className="radioChoiceContainer">
            <input type="radio" name="rg2" value="3"
              className="radioChoice"
              checked={this.state.rg2 === "3"}
              onChange={this.handleOptionChange} />
            <span>Ungefär lika mycket</span>
          </div>
        </div>

        <button onClick={this.onNext}>
          Starta
        </button>
      </div>
    )
  }
}

export default IntroSurvey