import { BsArrowRightShort } from "react-icons/bs";
import { callQuestionList } from "../services/apiService";
import { useHistory } from "react-router-dom";
import { NextButtonStyle } from "./NextButtonStyle";

export default function SelectionsNextButton({ triviaApiParametersDTO }) {
  const history = useHistory();

  const hasDifficulty = triviaApiParametersDTO.difficulty.length > 0;
  const hasAmount = triviaApiParametersDTO.amount > 0;
  const hasCategory = triviaApiParametersDTO.category > 0;

  const handleSubmit = (event) => {
    if (hasDifficulty || hasAmount || hasCategory) {
      event.preventDefault();
      callQuestionList(triviaApiParametersDTO).then(() =>
        history.push("/questions/1")
      );
    } else {
      alert(
        "Please ensure you select amount, category and level of difficulty"
      );
    }
  };

  return (
    <NextButtonStyle>
      <BsArrowRightShort onClick={handleSubmit} />
    </NextButtonStyle>
  );
}
