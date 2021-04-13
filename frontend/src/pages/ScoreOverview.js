import styled from "styled-components/macro";
import { BsArrowLeftShort } from "react-icons/bs";
import React from "react";
import { useHistory } from "react-router-dom";
import Scores from "../components/Scores";

export default function ScoreOverview({ user }) {
  const history = useHistory();

  return (
    <Wrapper>
      <h1> Score Overview </h1>
      <Scores user={user} />
      <button>
        <BsArrowLeftShort onClick={() => history.push("/welcome")} />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 30px 30px 0px 30px;
  layout: grid;
  grid-template-rows: 1fr 1fr auto;
  color: var(--beigeStandard);
  background: var(--greenStandard);

  h1 {
    color: var(--beigeStandard);
    font-size: 2.5em;
    padding-bottom: 25px;
    margin: 0px;
  }

  button {
    padding: 0px;
    align-self: end;
    justify-self: baseline;
    display: flex;
    align-content: end;
    font-size: 40px;
    cursor: pointer;
    border: none;
    color: var(--beigeStandard);
    background: var(--greenStandard);
  }
`;
