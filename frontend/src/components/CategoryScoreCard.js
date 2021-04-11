import styled from "styled-components/macro";

export default function CategoryScoreCard({ category, triviaPointDetails }) {
  return (
    <CategoryList>
      <header>{category} </header>
      <ul>
        <TableHeader>
          <div> Level </div>
          <div className="alignRight"> # Points</div>
          <div className="alignRight"> # Questions</div>
        </TableHeader>
        {triviaPointDetails.map((level) => (
          <li>
            <Section>
              <li> {level.difficulty} </li>
              <li className="alignRight"> {level.points} </li>
              <li className="alignRight"> {level.amount} </li>
            </Section>
          </li>
        ))}
      </ul>
    </CategoryList>
  );
}
const TableHeader = styled.section`
  display: grid;
  grid-template-columns: 20% [end] 1fr 1fr;
  text-decoration: underline;
  border-width: thin;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
`;

const CategoryList = styled.section`
  header {
    font-size: 1.3em;
  }

  ul {
    padding: 0px;
    margin: 10px 0 25px 0;
    list-style: none;
    display: grid;
    grid-gap: 2px;
  }

  .alignRight {
    text-align: end;
  }
`;
