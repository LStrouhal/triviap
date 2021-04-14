import styled from "styled-components/macro";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { NewGameButtonStyle } from "../components/buttons/NewGameButtonStyle";
import { getTotalPointsByUser } from "../services/apiService";

export default function TriviaWelcome({ user }) {
  const history = useHistory();
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    getTotalPointsByUser(user).then(setTotalScore);
  }, [user]);
  //

  return (
    <Wrapper>
      <header> Welcome back,</header>
      <p> {user}! </p>
      <div> Current score: {totalScore} points</div>
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
  padding: 30px 30px 20px 30px;
  display: grid;
  grid-template-rows: 30% 20% 10% auto;
  font-family: "Playfair Display', serif";

  header {
    display: flex;
    font-size: 3em;
    align-self: end;
    padding-bottom: 10px;
    text-align: center;
    justify-self: center;
  }

  p {
    font-size: 3em;
    margin: 0px;
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
