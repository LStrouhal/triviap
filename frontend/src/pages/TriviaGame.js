import Questions from "../components/Questions";
import styled from "styled-components/macro";
import { useState } from "react";

export default function TriviaGame({ numberOfQuestions, points, setPoints }) {
  const [visibleSeconds, setVisibleSeconds] = useState(30);

  return (
    <>
      <Header>
        <p> {visibleSeconds} seconds left </p>
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding: 10px;
`;
