import React from 'react'
import './IntroSurvey.css'

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

  onNext = () => {
    this.props.onNext(this.state)
  }

  handleOptionChange = (changeEvent) => {
    let radioGroup = changeEvent.target.name
    this.setState({ [radioGroup]: changeEvent.target.value })
  }

  handleNumberChange = (numberEvent) => {
    this.setState({ number: numberEvent.target.value.replace(/\D/, '') })
  }

  render() {
    return (
      <div id="introSurveyContainer">
        <h1>Inledande enkät</h1>

        <span>Hur gammal är du?</span>
        <input type="text"
          value={this.state.number}
          onChange={this.handleNumberChange} />

        <span>Hur mycket läser du under en vecka?</span>
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

        <span>Vilket format läser du mest av?</span>
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