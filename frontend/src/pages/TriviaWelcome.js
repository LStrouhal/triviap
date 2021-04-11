import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import React from "react";

export default function TriviaWelcome({ user }) {
  return (
    <Wrapper>
      <header> Welcome back,</header>
      <p> {user}! </p>
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
  grid-template-rows: 30% 30% auto;
  grid-gap: 10px;
  font-family: "Playfair Display', serif";
  

    header {
      display: flex;
      justify-content: center;
      font-size: 3em;
      align-self: end;
    }

    p {
      display: flex;
      justify-content: center;
      font-size: 4em;
      margin: 0px;
      text-transform: lowercase
    }
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
    }
  }
`;
