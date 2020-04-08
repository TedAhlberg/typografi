import React from 'react'

class IntroSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen_width: window.innerWidth,
      screen_height: window.innerHeight
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
      <div>
        <span>input numbers</span>
        <input type="text"
          value={this.state.number}
          onChange={this.handleNumberChange} />

        <span>rg1</span>
        <input type="radio" name="rg1" value="1"
          checked={this.state.rg1 === "1"}
          onChange={this.handleOptionChange} />

        <input type="radio" name="rg1" value="2"
          checked={this.state.rg1 === "2"}
          onChange={this.handleOptionChange} />

        <input type="radio" name="rg1" value="3"
          checked={this.state.rg1 === "3"}
          onChange={this.handleOptionChange} />

        <span>rg2</span>
        <input type="radio" name="rg2" value="1"
          checked={this.state.rg2 === "1"}
          onChange={this.handleOptionChange} />

        <input type="radio" name="rg2" value="2"
          checked={this.state.rg2 === "2"}
          onChange={this.handleOptionChange} />

        <input type="radio" name="rg2" value="3"
          checked={this.state.rg2 === "3"}
          onChange={this.handleOptionChange} />

        <button onClick={this.onNext}>
          Starta
        </button>
      </div>
    )
  }
}

export default IntroSurvey