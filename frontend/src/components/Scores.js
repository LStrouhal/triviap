import styled from "styled-components/macro";
import CategoryScoreCard from "./CategoryScoreCard";
import { useEffect, useState } from "react";
import { getScoreByUser } from "../services/apiService";

export default function Scores({ user }) {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    getScoreByUser(user).then(setScoreList);
  }, []);

  return (
    <Wrapper>
      <h1> Score Overview </h1>
      {scoreList.map((entry) => (
        <li>
          <CategoryScoreCard
            key={entry.category}
            category={entry.category}
            triviaPointDetails={entry.triviaPointDetails}
          />
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h1 {
    color: var(--beigeStandard);
    font-size: 2em;
  }

  li {
    grid-gap: 10px;
    list-style: none;
  }
`;
