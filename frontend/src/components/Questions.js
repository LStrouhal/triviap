import { getSingleQuestion } from "../services/apiService";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import Answers from "./Answers";
import { NextButtonStyle } from "./NextButtonStyle";
import { BsArrowRightShort } from "react-icons/bs";
import parse from "html-react-parser";

export default function Questions({ numberOfQuestions, setVisibleSeconds }) {
  const history = useHistory();
  const { questionID } = useParams();
  const [questionSet, setQuestionSet] = useState(undefined);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    getSingleQuestion(questionID).then(setQuestionSet);
    setSeconds(30);
  }, [questionID]);

  const loadNextQuestion = () => {
    console.log({ numberOfQuestions, questionID });
    if (numberOfQuestions == questionID) {
      history.push("/questions/" + "results");
    } else {
      const currentQuestionID = parseInt(questionID, 10);
      history.push("/questions/" + (currentQuestionID + 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds >= 0) {
        setSeconds(seconds - 1);
        setVisibleSeconds(seconds);
      } else {
        loadNextQuestion();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  if (!questionSet) {
    return <p> loading </p>;
  }

  return (
    <Wrapper>
      <p> {parse(questionSet.question)} </p>
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
