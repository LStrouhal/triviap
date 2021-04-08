import styled from "styled-components/macro";
import logo from "../images/greenMan.png";
import React from "react";

export default function ManLogo() {
  return (
    <GreenLogo>
      <img src={logo} alt="Logo" />
    </GreenLogo>
  );
}

const GreenLogo = styled.section`
  display: flex;
  justify-content: flex-end;
  height: 3.9em;
`;
