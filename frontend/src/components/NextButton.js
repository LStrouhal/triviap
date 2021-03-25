import styled from "styled-components/macro"
import {BsArrowRightShort} from "react-icons/bs"
import {callQuestionList} from "../services/apiService";

export default function NextButton({triviaApiParametersDTO}) {
    return (
        <Wrappper>
            <BsArrowRightShort  onClick={() =>
                callQuestionList({triviaApiParametersDTO}).then((response) => response.data)}/>
        </Wrappper>
    )
}

const Wrappper = styled.button`

  border: none;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  padding: 10px 0 0;
  font-size: 40px;
  cursor: pointer;

`