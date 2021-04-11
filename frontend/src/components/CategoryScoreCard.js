import styled from "styled-components/macro";

export default function CategoryScoreCard({ category, triviaPointDetails }) {
  return (
    <CategoryList>
      <header>{category} </header>
      <ul>
        {triviaPointDetails.map((level) => (
          <li>
            {" "}
            <Section>
              <div> {level.difficulty}: </div>
              <div className="alignCenter"> {level.points} points</div>
              <div className="alignRight"> ({level.amount} questions)</div>
            </Section>
          </li>
        ))}
      </ul>
    </CategoryList>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: 25% 1fr 1fr;
`;

const CategoryList = styled.section`
  padding: 10px 10px 0 10px;

  header {
    font-size: 1.1em;
  }

  ul {
    padding: 0 0 0 20px;
    margin: 10px 0 20px 0;
    list-style: none;
    display: grid;
    grid-gap: 2px;
  }

  .alignCenter {
    text-align: center;
  }

  .alignRight {
    text-align: end;
  }
`;
