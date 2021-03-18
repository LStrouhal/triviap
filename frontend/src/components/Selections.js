import styled from "styled-components/macro"
import DifficultySelector from "./DifficultySelector";
import NumberSelector from "./NumberSelector";
import CategorySelector from "./CategorySelector";

export default function Selections() {
    return (
        <Wrapper>
            <section>
                <header> Please select number of questions: </header>
                <NumberSelector/>
            </section>
            <section>
                <header> Please select category: </header>
                <CategorySelector/>
            </section>
            <section>
                <header> Please select level: </header>
                <DifficultySelector/>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  overflow-y: scroll;
  padding: 0 20px;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;

  header {
    font-size: 1.2em;
    padding: 30px 10px 10px 0;
  }

`