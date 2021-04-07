import styled from "styled-components/macro";
import BackButton from "../components/BackButton";
import React from "react";
import ManLogo from "../components/ManLogo";
import { Link } from "react-router-dom";

export default function TotalPoints() {
  return (
    <>
      <Header>
        <Link to="/results">
          <BackButton />
        </Link>
        <ManLogo />
      </Header>
    </>
  );
}

const Header = styled.header`
  background: var(--beigeStandard);
  padding: 10px 20px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
