import React from 'react'

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <h1>Examensarbete</h1>
        <h2>Ted Ahlberg</h2>
        <p>
          Som en del i mitt examensarbete ska jag undersöka läsbarheten och utformandet av texter för mobila enheter. För att kunna undersöka detta har jag utvecklat denna webbapplikation, vilket möjliggör insamlingen av data som kommer ligga till underlag för arbetet. All data som samlas in är helt anonym, kan inte spåras tillbaka till deltagaren och hanteras utefter dataskyddsförordningen <a href="https://www.imy.se/lagar--regler/dataskyddsforordningen/" target="_blank">GDPR</a>.</p>
        <p>
          Deltagaren av undersökningen blir ombedd att läsa 7 artiklar och svara på en kort enkät efter varje artikel, hela genomförandet tar cirka 15 minuter. Applikationen ska genomföras på en <b>smartphone</b> och inte på en PC, laptop eller läsplatta.</p>
        <p>
          Om du som deltagare behöver ta en mindre paus under genomförandet så går det bra, se bara till att göra det under en enkät och inte under läsandet av en artikel. När en artikel är färdigläst och deltagaren gått vidare går det inte att gå tillbaka till föregående artikel, tillbaka-knappen i webbläsaren återställer hela genomförandet. Använder du vanligtvis läsglasögon ombeds du att även använda dessa under deltagandet i undersökningen.
        </p>
        <button onClick={this.props.onNext}>
          Nästa
        </button>
      </div>
    )
  }
}
export default Intro