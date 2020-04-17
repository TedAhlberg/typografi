import React from 'react'

class ArticleSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onNext = () => {
    this.props.onNext(this.state)
  }

  handleOptionChange = (changeEvent) => {
    let radioGroup = changeEvent.target.name
    this.setState({ [radioGroup]: changeEvent.target.value })
  }

  render() {
    return (
      <div>
        <p>Article Survey</p>

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

        <button onClick={this.props.onNext}>
          Klar
        </button>
      </div>
    )
  }
}
export default ArticleSurvey