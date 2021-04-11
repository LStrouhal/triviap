import styled from "styled-components/macro";
import logo from "../images/whiteMan.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { animated, useSpring } from "react-spring";

export default function LoginPage({ setUser }) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const hasUserName = userName.length > 0;

  const props = useSpring({
    delay: 1000,
    opacity: 1,
    from: { opacity: 0 },
  });

  const propsLogin = useSpring({
    delay: 2000,
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasUserName) {
      return;
    }
    setUserName("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <animated.div style={props}>
        <header>triviap</header>
      </animated.div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <animated.div style={propsLogin}>
        <buttons>
          <input
            type="text"
            value={userName}
            placeholder="Enter User"
            font-size="16px"
            style={{ backgroundColor: "#f7f7f2", fontSize: "1em" }}
            onChange={(event) => {
              const player = event.target.value;
              setUserName(player);
              setUser(player);
            }}
          />
          <button
            backgroundColor="#f7f7f2"
            disabled={!hasUserName}
            onClick={() => history.push("/welcome")}
          >
            Submit User
          </button>
        </buttons>
      </animated.div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: 30% 30% auto;
  padding: 30px;
  grid-gap: 10px;
  font-family: "Playfair Display', serif";

  header {
    font-size: 4em;
    align-self: flex-end;
    justify-self: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
  }

  buttons {
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
    width: 100%;
    padding-top: 20px;

    input {
      width: 100%;
      border-radius: 10px;
      height: 35px;
      font-size: 1em;
      text-align: center;
      background-color: var(--beigeStandard);
      font-color: var(--standardGreen);
      align-self: end;
      outline: none;
      box-shadow: none;
    }

    button {
      width: 100%;
      border-radius: 10px;
      height: 35px;
      font-size: 1em;
      background-color: var(--beigeStandard);
      font-color: var(--standardGreen);
      border: none;
    }
  }
`;
