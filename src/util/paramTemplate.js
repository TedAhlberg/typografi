const get = (state) => {
  let res = {
    //Intro Survey
    "screenWidth": JSON.stringify(state.introSurvey.screenWidth),
    "screenHeight": JSON.stringify(state.introSurvey.screenHeight),
    "browserName": JSON.stringify(state.introSurvey.browserName),
    "browserPlatform": JSON.stringify(state.introSurvey.browserPlatform),

    //Read Articles
    "readArticles": JSON.stringify(state.readArticles),

    //Read Fonts
    "readFonts": JSON.stringify(state.readFonts),

    //Read Sizes
    "readSizes": JSON.stringify(state.readSizes),
  }

  //Article Data & Survey Data
  for (var i = 0; i < 7; i++) {
    let index = (i + 1)
    res["articleData" + index] = JSON.stringify(state.articleData[i])
    res["surveyData" + index] = JSON.stringify(state.surveyData[i])
  }
  return res
}
export default { get }