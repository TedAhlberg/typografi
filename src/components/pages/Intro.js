import React from 'react'

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <h1>Examensarbete</h1>
        <h2>Ted Ahlberg</h2>
        <p>
          Som en del i mitt examensarbete ska jag undersöka läsbarheten och utformandet av texter för mobila enheter. För att kunna undersöka detta har jag utvecklat denna webbapplikation, vilket möjliggör insamlingen av data som kommer ligga till underlag för arbetet. All data som samlas in är helt anonym och kan inte spåras tillbaka till deltagaren.
        </p>
        <p>
          Deltagaren av undersökningen blir ombedd att läsa 7 artiklar och svara på en kort enkät efter varje artikel, hela genomförandet tar cirka 15 minuter. Undersökningen är uppdelad i två delar, varav de 4 första artiklarna avhandlar typsnitt medan de 3 sista artiklarna avhandlar typstorlek. När en artikel är färdigläst och deltagaren gått vidare går det inte att gå tillbaka till föregående artikel, tillbaka-knappen i webbläsaren återställer hela genomförandet.
        </p>
        <p>
        Applikationen ska genomföras på en mobiltelefon och inte på en PC eller laptop. Om du som deltagare behöver ta en mindre paus under genomförandet så går det bra, se bara till att göra det under en enkät och inte under läsandet av en artikel. Använder du vanligtvis läsglasögon ombeds du att även använda dessa under deltagandet i undersökningen.
        </p>
        <button onClick={this.props.onNext}>
          Nästa
        </button>
      </div>
    )
  }
}
export default Intro