import { useSpring, animated } from "react-spring";
import styled from "styled-components/macro";
import { NextButtonStyle } from "../components/NextButtonStyle";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/whiteMan.png";
import React from "react";

export default function TriviaWelcome() {
  const history = useHistory();
  const handleSubmit = (event) => {
    history.push("/questions");
  };

  return (
    <Wrapper>
      <header>
        <p> Welcome to</p>
        <logo> triviap</logo>
      </header>
      <body>
        <Link to="/questions">
          <button> New Game</button>
        </Link>
        <Link to="/scoreOverview">
          <button> Score Overview</button>
        </Link>
      </body>
      <footer>
        <NextButtonStyle>
          <BsArrowRightShort onClick={handleSubmit} />
        </NextButtonStyle>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  padding: 0 20px;
  display: grid;
  grid-template-rows: 1fr 25% auto;
  grid-gap: 10px;

  header {
    align-self: center;

    p {
      display: flex;
      justify-content: center;
      font-size: 2em;
    }

    logo {
      display: flex;
      justify-content: center;
      font-size: 4em;
      font-family: fascinate;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    width: 150px;
    grid-gap: 10px;

    button {
      width: 150px;
      font-size: 1em;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }
`;
