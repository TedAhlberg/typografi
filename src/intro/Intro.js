import React from 'react'

class Intro extends React.Component {
  render() {
    return (
      <div>
        <h1>Lorem ipsum</h1>
        <p>
          dolor sit amet, consectetur adipiscing elit. Nullam odio leo, molestie nec justo nec, elementum varius justo. In id justo in orci blandit interdum. Curabitur ornare ut risus in rutrum. Aenean tristique lacus laoreet turpis facilisis congue id vel lectus. Integer ut odio fermentum, dignissim ante eget, placerat dolor. Pellentesque placerat mattis dui. Sed et enim eu massa tincidunt rhoncus. Etiam blandit laoreet tincidunt. Proin pellentesque dolor sit amet sapien euismod, vel mollis sem suscipit. In hac habitasse platea dictumst. In scelerisque felis in dignissim posuere. Cras ullamcorper justo ac tristique pharetra. Quisque sagittis ex sit amet eros tempor euismod a luctus ligula.
        </p>
        <button onClick={this.props.onNext}>
          Nästa
        </button>
      </div>
    )
  }
}
export default Intro