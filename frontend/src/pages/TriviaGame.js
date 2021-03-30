import Questions from "../components/Questions";
import styled from "styled-components/macro";

export default function TriviaGame({ numberOfQuestions }) {
  return (
    <>
      <Header />
      <Questions numberOfQuestions={numberOfQuestions} />
    </>
  );
}

const Header = styled.header`
  background: var(--beigeStandard);
`;
