import Selections from "../components/Selections";
import BackButton from "../components/BackButton";
import styled from "styled-components/macro";

export default function TriviaSelector({ onClickSetNumberOfQuestions }) {
  return (
    <>
      <Header>
        <BackButton />
      </Header>
      <Selections onClickSetNumberOfQuestions={onClickSetNumberOfQuestions} />
    </>
  );
}

const Header = styled.header`
  background: var(--beigeStandard);
  padding: 10px;
`;
