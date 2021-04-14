import styled from "styled-components/macro";
import { savePoints } from "../services/apiService";
import { useHistory } from "react-router-dom";
import React from "react";
import { NewGameButtonStyle } from "../components/buttons/NewGameButtonStyle";

export default function TriviaResults({ user, points, selectionParameters }) {
  const history = useHistory();
  const triviaPointSavingDTO = {
    user: user,
    category: selectionParameters.category,
    amount: selectionParameters.amount,
    difficulty: selectionParameters.difficulty,
    points: points,
  };

  function handleSubmit(triviaPointSavingDTO) {
    savePoints(triviaPointSavingDTO).then((response) => {
      history.push("/scoreOverview");
    });
  }

  return (
    <Wrapper>
      <h1> Congrats! </h1>
      <p> </p>
      <p> You scored: {points} points </p>
      <section>
        <NewGameButtonStyle onClick={() => history.push("/questions")}>
          New Game
        </NewGameButtonStyle>
        <NewGameButtonStyle onClick={() => handleSubmit(triviaPointSavingDTO)}>
          {" "}
          Save Score
        </NewGameButtonStyle>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: 30% 20% 10% auto;
  padding: 30px 30px 20px 30px;

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 3em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.6em;
    justify-self: center;
    margin: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
    width: 100%;
    padding-top: 20px;
  }
`;
