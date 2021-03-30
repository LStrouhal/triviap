import styled, { css } from "styled-components/macro";

export const AnswerButtonStyle = styled.button`
  background-color: var(--beigeStandard);
  color: var(--greenStandard);
  height: min-content;
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  width: 100%;
  padding: 20px;
  font-size: 1.2em;
  font-family: "Helvetica Neue";
  margin-bottom: 20px;
  cursor: pointer;

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
