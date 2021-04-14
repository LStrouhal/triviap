import { NewGameButtonStyle } from "../components/buttons/NewGameButtonStyle";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { addUser, checkUserExists } from "../services/apiService";

export default function TriviaRegister({ setUser }) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const hasUserName = userName.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasUserName) {
      return;
    }
    setUserName("");
  };

  const userDTO = {
    user: userName,
    triviaPointCategory: [],
  };

  const handleClick = () => {
    checkUserExists(userName).then((response) => {
      if (response) {
        alert("User already exists. Please try again");
      } else {
        history.push("/questions");
        addUser(userDTO).then((pointSummary) => {
          const newUser = pointSummary.user;
          setUser(newUser);
        });
      }
    });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <header>Welcome!</header>
      <p>Please register below</p>
      <buttons>
        <input
          type="text"
          value={userName}
          placeholder="Enter New User"
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
          }}
        />
        <NewGameButtonStyle
          backgroundColor="#f7f7f2"
          disabled={!hasUserName}
          onClick={handleClick}
        >
          Register
        </NewGameButtonStyle>
      </buttons>
    </Wrapper>
  );
}

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

  p {
    font-size: 1.5em;
    margin: 0px;
    padding-bottom: 10px;
    justify-self: center;
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
