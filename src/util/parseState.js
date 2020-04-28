const parse = (state) => {
  let res = 
    "Intro Survey: "  + JSON.stringify(state.introSurvey) + "\n"
  + "Read Articles: " + JSON.stringify(state.readArticles) + "\n"
  + "Read Fonts: "    + JSON.stringify(state.readFonts) + "\n"
  + "Read Sizes: "    + JSON.stringify(state.readSizes) + "\n"
  + "Article Data: "  + JSON.stringify(state.articleData) + "\n"
  + "Survey Data: "   + JSON.stringify(state.surveyData) 

  return res
}
export default { parse }