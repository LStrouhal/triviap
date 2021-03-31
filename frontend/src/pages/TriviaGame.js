import Questions from "../components/Questions";
import styled from "styled-components/macro";
import { useState } from "react";

export default function TriviaGame({ numberOfQuestions }) {
  const [visibleSeconds, setVisibleSeconds] = useState(30);

  return (
    <>
      <Header>
        <p id="seconds"> {visibleSeconds} seconds left</p>
      </Header>
      <Questions
        numberOfQuestions={numberOfQuestions}
        setVisibleSeconds={setVisibleSeconds}
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
`;
