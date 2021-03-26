import Questions from "../components/Questions";
import styled from "styled-components/macro";

export default function TriviaGame () {

    return (
        <>
            <Header/>
            <Questions/>
        </>
    )
}

const Header = styled.header`

  background: var(--beigeStandard);
  
`


