import styled from "styled-components/macro";
import React from "react";
import { useHistory } from "react-router-dom";
import { NewGameButtonStyle } from "../components/NewGameButtonStyle";

export default function TriviaWelcome({ user }) {
  const history = useHistory();

  return (
    <Wrapper>
      <header> Welcome back,</header>
      <p> {user}! </p>
      <div> Current score: 800 points</div>
      <buttons>
        <NewGameButtonStyle onClick={() => history.push("/questions")}>
          New Game
        </NewGameButtonStyle>
        <NewGameButtonStyle onClick={() => history.push("/scoreOverview")}>
          Score Overview
        </NewGameButtonStyle>
      </buttons>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  padding: 30px;
  display: grid;
  grid-template-rows: 30% 20% 10% auto;
  font-family: "Playfair Display', serif";

  header {
    display: flex;
    font-size: 3em;
    align-self: end;
    padding-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 3em;
    margin: 0px;
    text-transform: lowercase;
    padding-bottom: 10px;
    justify-self: center;
  }

  div {
    font-size: 1.5em;
    text-align: center;
  }

  buttons {
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
    width: 100%;
    padding-top: 20px;
  }
`;
