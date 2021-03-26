import Selections from "../components/Selections";
import BackButton from "../components/BackButton";
import styled from "styled-components/macro";

export default function TriviaSelector() {

    return (
        <>
            <Header>
                <BackButton/>
            </Header>
            <Selections/>
        </>
    )
}

const Header = styled.header`

  background: var(--beigeStandard);
  padding: 10px;
  
`;