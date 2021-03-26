import axios from "axios"

const baseUrl = "/questions"

export const callQuestionList = (triviaApiParametersDTO) =>
    axios.post(baseUrl, triviaApiParametersDTO).then();

export const getSingleQuestion = (questionID) =>
    axios.get( `${baseUrl}/${questionID}`).then(response => response.data);



