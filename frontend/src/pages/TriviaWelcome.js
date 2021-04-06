//import { Transition } from "react-spring/renderprops";
import styled from "styled-components/macro";

export default function TriviaWelcome() {
  return (
    <Wrapper>
      <section> Welcome to </section>
      <h1> triviap </h1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  padding: 20px;
  display: grid;
  font-style: italic;
  font-family: fantasy;
  justify-content: center;
  justify-items: center;

  section {
    display: flex;
    align-items: flex-end;
    font-size: 1.2em;
  }
`;
