import axios from "axios";

const baseUrl = "/questions";
const userUrl = "/api/user";
const scoreOverviewUrl = "/questions/scoreOverview";
const totalScoreUrl = "/questions/totalScore";

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

export const getTotalPointsByUser = (user) =>
  axios.get(`${totalScoreUrl}/${user}`).then((response) => response.data);

export const checkUserExists = (user) =>
  axios.get(`${userUrl}/${user}`).then((response) => response.data);

export const addUser = (userDTO) =>
  axios.post(userUrl, userDTO).then((response) => response.data);
