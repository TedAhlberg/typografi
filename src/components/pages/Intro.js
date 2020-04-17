import React from 'react'

class Intro extends React.Component {
  render() {
    return (
      <div>
        <h1>Examensarbete – Ted Ahlberg</h1>
        <p>
          Som en del i mitt examensarbete ska jag undersöka användbarheten och utformandet av texter för mobila enheter. För att kunna undersöka detta har jag utformat denna webbapplikation, applikationen underlättar insamlingen av data för undersökningen. All data som samlas in om deltagaren är helt anonym och kommer inte kunna spåras tillbaka till deltagaren. Deltagarna av underökningen blir ombedda att läsa 7 artiklar och svara på en kort enkät efter varje artikel, hela genomförandet tar cirka XX minuter. Om du som deltar behöver eller vill ta en paus under genomförandet så går det bra, se bara till att göra det under en enkät och inte under läsandet av en artikel.
        </p>
        <button onClick={this.props.onNext}>
          Nästa
        </button>
      </div>
    )
  }
}
export default Intro