import styled from "styled-components/macro";
import { BsArrowLeftShort } from "react-icons/bs";

export default function BackButton({ handleClick }) {
  return (
    <ArrowButton>
      <BsArrowLeftShort onClick={handleClick} />
    </ArrowButton>
  );
}

const ArrowButton = styled.button`
  border: none;
  background: var(--beigeStandard);
  color: var(--greenStandard);
  padding: 0;
  font-size: 40px;
  cursor: pointer;
  justify-self: start;
  display: flex;
  align-items: center;
`;
