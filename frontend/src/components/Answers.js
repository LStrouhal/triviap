import styled from "styled-components/macro"

export default function Answers({answers}) {

    return (
        <AnswerList>
            {answers.map(answer =>
                <button> key= {answer} {answer} </button>
            )}
        </AnswerList>
    )
}

const AnswerList = styled.ul`

  button {
    background-color: var(--beigeStandard);
    color: var(--greenStandard);
    height: min-content;
    width: 100%;
    padding: 20px;
    justify-content: left;
    display: flex;
    flex-flow: wrap;
    font-size: 1.2em;
    font-family: "Helvetica Neue";
    margin-bottom: 20px;
  }
`