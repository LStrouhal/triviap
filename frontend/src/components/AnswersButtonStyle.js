import styled, { css } from "styled-components/macro";

export const AnswerButtonStyle = styled.button`
  background-color: var(--beigeStandard);
  color: var(--greenStandard);
  height: min-content;
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  font-family: "Playfair Display', serif";
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  box-shadow: none;

  ${(props) =>
    props.status === "correct" &&
    css`
      background-color: limegreen;
    `}

  ${(props) =>
    props.status === "incorrect" &&
    css`
      background-color: red;
    `}
`;
