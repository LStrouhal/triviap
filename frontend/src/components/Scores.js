import styled from "styled-components/macro";
import CategoryScoreCard from "./CategoryScoreCard";
import { useEffect, useState } from "react";
import { getScoreByUser } from "../services/apiService";

export default function Scores({ user }) {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    getScoreByUser(user).then(setScoreList);
  }, [user]);
  //

  return (
    <Wrapper>
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
  li {
    grid-gap: 10px;
    list-style: none;
  }
`;
