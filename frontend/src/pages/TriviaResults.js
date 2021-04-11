import styled from "styled-components/macro";
import { savePoints } from "../services/apiService";
import { useHistory } from "react-router-dom";
import React from "react";

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
      <h1> Congratulations! </h1>
      <p> You scored: {points} points </p>
      <section>
        <button onClick={() => history.push("/questions")}>New Game</button>
        <button onClick={() => handleSubmit(triviaPointSavingDTO)}>
          {" "}
          Save Score
        </button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 30px;

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 2.5em;
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

  button {
    width: 100%;
    border-radius: 10px;
    font-size: 1em;
    height: 35px;
    outline: none;
    box-shadow: none;
    font-family: "Playfair Display', serif";
    border: none;
  }
`;
