import { useParams } from "react-router-dom";
import { checkAnswer } from "../services/apiService";
import { AnswerButtonStyle } from "./AnswersButtonStyle";
import { useState } from "react";
import parse from "html-react-parser";

export default function Answers({ answers }) {
  const { questionID } = useParams();
  const [answerStatus, setAnswerStatus] = useState([]);

  function handleSubmit(answer) {
    const hasAnswer = answerStatus.some(
      (answerStatusObject) => answerStatusObject.id === answer
    );
    if (hasAnswer) {
      return;
    }
    const triviaSelectedAnswerDTO = {
      questionId: questionID,
      selectedAnswer: answer,
    };

    checkAnswer(triviaSelectedAnswerDTO).then((response) => {
      const status = response ? "correct" : "incorrect";
      const updatedArray = [...answerStatus, { id: answer, status }];
      setAnswerStatus(updatedArray);
    });
  }

  const getAnswerStatus = (answer) => {
    const matchAnswer = answerStatus.find(
      (answerStatusObject) => answerStatusObject.id === answer
    );
    if (matchAnswer !== undefined) {
      return matchAnswer.status;
    }
  };

  return (
    <section>
      {answers.map((answer) => (
        <AnswerButtonStyle
          key={answer}
          answer={answer}
          status={getAnswerStatus(answer)}
          onClick={() => handleSubmit(answer)}
        >
          {parse(answer)}
        </AnswerButtonStyle>
      ))}
    </section>
  );
}
