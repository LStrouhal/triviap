import styled from "styled-components/macro";
import { BsArrowLeftShort } from "react-icons/bs";
import React from "react";
import { useHistory } from "react-router-dom";
import Scores from "../components/Scores";

export default function ScoreOverview({ user }) {
  const history = useHistory();

  return (
    <Wrapper>
      <Scores user={user} />
      <footer>
        <BsArrowLeftShort onClick={() => history.push("/welcome")} />
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 30px 30px 0px 30px;
  layout: grid;
  grid-template-rows: 90% 10%;

  footer {
    color: var(--beigeStandard);
    background: var(--greenStandard);
    font-size: 40px;
    cursor: pointer;
    border: none;
  }
`;
