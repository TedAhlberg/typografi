import React from 'react'

class ArticleSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>Article Survey</p> 
        <button onClick={this.props.onNext}>
          Klar
        </button>
      </div>
    )
  }
}
export default ArticleSurvey