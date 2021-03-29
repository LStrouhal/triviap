import {useParams} from "react-router-dom";
import {checkAnswer} from "../services/apiService";
import {AnswerButtonStyle} from "./AnswersButtonStyle";

export default function Answers({answers}) {

    const {questionID} = useParams()

    function handleSubmit(answer) {
        const triviaSelectedAnswerDTO = {questionId: questionID, selectedAnswer: answer}
        checkAnswer(triviaSelectedAnswerDTO)
            .then((answerStatus) => {
                    if (answerStatus) {
                        alert("Correct answer. Please click the next button")
                        document.getElementById(answer).style.backgroundColor = "limeGreen"
                        document.getElementById(answer).style.color = "#f7f7f2"
                    } else {
                        alert("Incorrect answer. Please try again")
                        document.getElementById(answer).style.backgroundColor = "red"
                        document.getElementById(answer).style.color = "#f7f7f2"
                    }
                }
            )
    }


    return (
        <section>
            {answers.map((answer) =>
                <AnswerButtonStyle id={answer} key={answer} answer={answer} onClick={() => handleSubmit(answer)}>
                    {answer}
                </AnswerButtonStyle>
            )}
        </section>
    )
}

