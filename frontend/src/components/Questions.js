import { getSingleQuestion } from "../services/apiService";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import Answers from "./Answers";
import { NextButtonStyle } from "./NextButtonStyle";
import { BsArrowRightShort } from "react-icons/bs";

export default function Questions({ numberOfQuestions }) {
  const history = useHistory();
  const { questionID } = useParams();
  const [questionSet, setQuestionSet] = useState(undefined);

  useEffect(() => {
    getSingleQuestion(questionID).then(setQuestionSet);
  }, [questionID]);

  if (!questionSet) {
    return <p> loading </p>;
  }

  const loadNextQuestion = () => {
    console.log({ numberOfQuestions, questionID });
    if (numberOfQuestions == questionID) {
      history.push("/questions/" + "results");
    } else {
      const currentQuestionID = parseInt(questionID, 10);
      history.push("/questions/" + (currentQuestionID + 1));
    }
  };

  return (
    <Wrapper>
      <p>{questionSet.question}</p>
      <section>
        <Answers answers={questionSet.answers} />
      </section>
      <footer>
        <NextButtonStyle>
          <BsArrowRightShort onClick={loadNextQuestion} />
        </NextButtonStyle>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 0 20px;
  display: grid;
  grid-template-rows: auto 1fr auto;

  p {
    background-color: var(--beigeStandard);
    color: var(--greenStandard);
    height: min-content;
    display: flex;
    flex-flow: wrap;
    justify-content: left;
    width: 100%;
    padding: 20px;
    font-size: 1.2em;
    margin-bottom: 40px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }
`;
