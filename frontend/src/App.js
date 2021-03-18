import styled from "styled-components/macro"
import SelectionsHeader from "./components/SelectionsHeader";
import Selections from "./components/Selections";

export default function App() {


    return (
        <PageLayout>
            <SelectionsHeader/>
            <Selections/>
        </PageLayout>
    );
}

const PageLayout = styled.div`
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: auto 1fr;
`;

