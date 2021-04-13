import styled from "styled-components/macro";
import logo from "../images/whiteMan.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { NewGameButtonStyle } from "../components/NewGameButtonStyle";
import { checkUserExists } from "../services/apiService";
import { AiOutlineUserAdd } from "react-icons/ai";

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

  const handleClick = () => {
    checkUserExists(userName).then((response) => {
      if (response) {
        history.push("/welcome");
      } else {
        alert("User does not exist. Please try again or add user");
      }
    });
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
            style={{
              backgroundColor: "#f7f7f2",
              fontSize: "1em",
              font: "Playfair Display', serif",
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
            onChange={(event) => {
              const player = event.target.value;
              setUserName(player);
              setUser(player);
            }}
          />
          <NewGameButtonStyle
            backgroundColor="#f7f7f2"
            disabled={!hasUserName}
            onClick={handleClick}
          >
            Login
          </NewGameButtonStyle>
        </buttons>
      </animated.div>
      <AddNewUserButton>
        <animated.div style={propsLogin}>
          <AiOutlineUserAdd onClick={() => history.push("/register")} />
        </animated.div>
      </AddNewUserButton>
    </Wrapper>
  );
}

const AddNewUserButton = styled.button`
  border: none;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  font-size: 30px;
  justify-self: end;
  align-self: end;
  padding: 0px;
`;

const Wrapper = styled.form`
  height: 100vh;
  background: var(--greenStandard);
  color: var(--beigeStandard);
  display: grid;
  grid-template-rows: 30% 30% auto 10%;
  padding: 30px 30px 20px 30px;
  font-family: "Playfair Display', serif";

  header {
    font-size: 4em;
    align-self: flex-end;
    justify-self: center;
    padding-bottom: 10px;
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
      padding: 0px;
      width: 100%;
      border-radius: 10px;
      height: 35px;
      font-size: 1em;
      text-align: center;
      background-color: var(--beigeStandard);
      align-self: end;
      outline: none;
      box-shadow: none;
      font-family: "Playfair Display', serif";
    }
  }
`;
