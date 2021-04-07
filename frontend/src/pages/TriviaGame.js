import Questions from "../components/Questions";
import styled from "styled-components/macro";
import React, { useState } from "react";
import ManLogo from "../components/ManLogo";

export default function TriviaGame({ numberOfQuestions, points, setPoints }) {
  const [visibleSeconds, setVisibleSeconds] = useState(30);

  return (
    <>
      <Header>
        <div> </div>
        <div> {visibleSeconds} sec </div>
        <ManLogo />
      </Header>
      <Questions
        numberOfQuestions={numberOfQuestions}
        setVisibleSeconds={setVisibleSeconds}
        setPoints={setPoints}
        points={points}
      />
    </>
  );
}

const Header = styled.header`
  background: var(--beigeStandard);
  color: var(--greenStandard);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 20px 10px 20px;

  div {
    display: flex;
    align-self: center;
    font-size: 1.2em;
  }
`;
