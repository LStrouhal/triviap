import styled from "styled-components/macro"
import BackButton from "./BackButton";

export default function SelectionsHeader() {
    return (
        <Header>
            <BackButton/>
        </Header>
    )
}

const Header = styled.header`

  background: var(--beigeStandard);
  padding: 10px;
  
`