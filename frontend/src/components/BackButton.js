import styled from "styled-components/macro"
import {BsArrowLeftShort} from "react-icons/bs"

export default function BackButton() {
    return (
        <ArrowButton>
            < BsArrowLeftShort/>
        </ArrowButton>
    )
}

const ArrowButton = styled.button`

  border: none;
  background: var(--beigeStandard);
  color: var(--greenStandard);
  padding: 10px 0 0 0;
  font-size: 40px;
  cursor: pointer;
`