import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function TriviaResults({ points }) {
  return (
    <Wrapper>
      <h1> Congratulations! </h1>
      <p> You scored: {points} points </p>
      <section>
        <Link to="/questions">
          <button>New Game</button>
        </Link>
        <button> Score Details</button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 20px;

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  p {
    font-size: 1.2em;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 150px;
    grid-gap: 10px;
  }

  button {
    font-size: 1em;
    justify-content: left;
  }
`;
