import Selections from "../components/Selections";
import BackButton from "../components/BackButton";
import styled from "styled-components/macro";
import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/greenMan.png";

export default function TriviaSelector({
  onClickSetNumberOfQuestions,
  setSelectionParameters,
  setPoints,
}) {
  const history = useHistory();
  const handleClick = (event) => {
    history.push("/welcome");
  };

  return (
    <>
      <Header>
        <BackButton handleClick={handleClick} />
        <img src={logo} alt="Logo" />
      </Header>
      <Selections
        onClickSetNumberOfQuestions={onClickSetNumberOfQuestions}
        setSelectionParameters={setSelectionParameters}
        setPoints={setPoints}
      />
    </>
  );
}

const Header = styled.header`
  background: var(--beigeStandard);
  padding: 10px 30px 10px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    justify-self: end;
    height: 3em;
  }
`;
