import Selections from "../components/Selections";
import BackButton from "../components/BackButton";
import styled from "styled-components/macro";
import React from "react";
import ManLogo from "../components/ManLogo";

export default function TriviaSelector({
  onClickSetNumberOfQuestions,
  setSelectionParameters,
}) {
  return (
    <>
      <Header>
        <BackButton />
        <ManLogo />
      </Header>
      <Selections
        onClickSetNumberOfQuestions={onClickSetNumberOfQuestions}
        setSelectionParameters={setSelectionParameters}
      />
    </>
  );
}

const Header = styled.header`
  background: var(--beigeStandard);
  padding: 10px 20px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
