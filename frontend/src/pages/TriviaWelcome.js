import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import React from "react";

export default function TriviaWelcome({ user }) {
  return (
    <Wrapper>
      <header> Welcome back,</header>
      <p> {user}! </p>
      <div> Current score: 800 points</div>
      <buttons>
        <Link to="/questions">
          <button> New Game</button>
        </Link>
        <Link to="/scoreOverview">
          <button> Score Overview</button>
        </Link>
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

    button {
      height: 35px;
      width: 100%;
      font-size: 1em;
      background-color: var(--beigeStandard);
      font-color: var(--standardGreen);
      border: none;
      border-radius: 10px;
      font-family: "Playfair Display', serif";
    }
  }
`;
