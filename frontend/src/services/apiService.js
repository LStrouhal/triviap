import axios from "axios"

const baseUrl = "/questions"

export const callQuestionList = (triviaApiParametersDTO) =>
    axios.post(baseUrl, triviaApiParametersDTO).then()



