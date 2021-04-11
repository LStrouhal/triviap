import axios from "axios";

const baseUrl = "/questions";
const scoreOverviewUrl = "/questions/scoreOverview";

export const callQuestionList = (triviaApiParametersDTO) =>
  axios.post(baseUrl, triviaApiParametersDTO).then();

export const getSingleQuestion = (questionID) =>
  axios.get(`${baseUrl}/${questionID}`).then((response) => response.data);

export const checkAnswer = (triviaSelectedAnswerDTO) =>
  axios
    .post(baseUrl + "/answer", triviaSelectedAnswerDTO)
    .then((response) => response.data);

export const savePoints = (triviaPointSavingDTO) =>
  axios
    .post(baseUrl + "/points", triviaPointSavingDTO)
    .then((response) => response.data);

export const getScoreByUser = (user) =>
  axios.get(`${scoreOverviewUrl}/${user}`).then((response) => response.data);
