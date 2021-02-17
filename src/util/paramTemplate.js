import date from './date'

const get = (state) => {
  let res = {
    "_date": date.getDateString(),
    "_time": date.getTimeString(),

    //Intro Survey
    "age": state.introSurvey.age,
    "rg1": state.introSurvey.rg1,
    "rg2": state.introSurvey.rg2,

    "screenWidth": state.introSurvey.screenWidth,
    "screenHeight": state.introSurvey.screenHeight,
    "browserName": state.introSurvey.browserName,
    "browserPlatform": state.introSurvey.browserPlatform,

    //Read Articles
    "readArticles": state.readArticles,

    //Read Fonts
    "readFonts": state.readFonts,

    //Read Sizes
    "readSizes": state.readSizes
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