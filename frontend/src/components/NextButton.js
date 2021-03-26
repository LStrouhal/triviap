import styled from "styled-components/macro"
import {BsArrowRightShort} from "react-icons/bs"
import {callQuestionList} from "../services/apiService";
import { useHistory } from 'react-router-dom'


export default function NextButton({triviaApiParametersDTO}) {

    const history = useHistory();

    const hasDifficulty = triviaApiParametersDTO.difficulty.length > 0;
    const hasAmount = triviaApiParametersDTO.amount > 0;
    const hasCategory = triviaApiParametersDTO.category >0;

    const handleSubmit = (event) => {
        if (hasDifficulty || hasAmount || hasCategory) {
            event.preventDefault();
            callQuestionList(triviaApiParametersDTO)
                .then(() =>history.push("/questions/1"))
        }
        else { alert("Please ensure you select amount, category and level of difficulty") }
    }

    return (
        <NextArrowButton>
            <BsArrowRightShort
            onClick={handleSubmit}/>
        </NextArrowButton>
    )
}

const NextArrowButton = styled.button`

  border: none;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  padding: 10px 0 0;
  font-size: 40px;
  cursor: pointer;

`