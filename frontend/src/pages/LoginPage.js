import styled from "styled-components/macro";
import logo from "../images/whiteMan.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { animated, useSpring } from "react-spring";

export default function LoginPage() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const hasUserName = userName.length > 0;

  const props = useSpring({ delay: 2000, opacity: 1, from: { opacity: 0 } });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasUserName) {
      return;
    }
    setUserName("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <header> triviap</header>
      <div>
        <animated.div style={props}>
          <img src={logo} alt="Logo" />
        </animated.div>
      </div>
      <input
        type="text"
        value={userName}
        placeholder="user"
        style={{ backgroundColor: "#f7f7f2" }}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button
        background-color="#f7f7f2"
        disabled={!hasUserName}
        onClick={() => history.push("/welcome")}
      >
        Login
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: 20% 30% 15% auto;
  padding: 20px;
  grid-gap: 15px;

  header {
    font-size: 4em;
    font-family: fascinate;
    align-self: flex-end;
    justify-self: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
  }

  input {
    height: 40px;
    width: 100%;
    display: flex;
    align-self: flex-end;
    text-align: center;
  }

  button {
    height: 40px;
  }
`;
