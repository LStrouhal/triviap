import styled from "styled-components/macro";
import { useState } from "react";
import useStyles from "./DropdownStyle";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { difficultyList } from "./DifficultyList";
import { categoryList } from "./CategoryList";
import { numberList } from "./NumberList";
import SelectionsNextButton from "./SelectionsNextButton";

export default function Selections({
  onClickSetNumberOfQuestions,
  setSelectionParameters,
  setPoints,
}) {
  const style = useStyles();

  const [category, setCategory] = useState("");
  const handleChangeCategory = (selection) =>
    setCategory(selection.target.value);

  const [amount, setAmount] = useState("");
  const handleChangeNumber = (selection) => {
    const newAmount = selection.target.value;
    setAmount(newAmount);
    onClickSetNumberOfQuestions(newAmount);
  };

  const [difficulty, setDifficulty] = useState("");
  const handleChangeDifficulty = (selection) =>
    setDifficulty(selection.target.value);

  const triviaApiParametersDTO = {
    amount: amount,
    category: category,
    difficulty: difficulty,
  };

  return (
    <Wrapper>
      <section>
        <header> Select number of questions:</header>
        <FormControl className={style.formControl}>
          <Select
            className={style.Select}
            disableUnderline={true}
            onChange={handleChangeNumber}
            value={amount}
          >
            {numberList.map((number) => (
              <MenuItem
                className={style.MenuItem}
                key={number.value}
                value={number.value}
              >
                {number.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
      <section>
        <header> Select category:</header>
        <FormControl className={style.formControl}>
          <Select
            className={style.Select}
            disableUnderline={true}
            onChange={handleChangeCategory}
            value={category}
          >
            {categoryList.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
      <section>
        <header> Select level of difficulty:</header>
        <FormControl className={style.formControl}>
          <Select
            className={style.Select}
            disableUnderline={true}
            onChange={handleChangeDifficulty}
            value={difficulty}
          >
            {difficultyList.map((difficulty) => (
              <MenuItem key={difficulty.value} value={difficulty.value}>
                {difficulty.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
      <footer>
        <SelectionsNextButton
          setSelectionParameters={setSelectionParameters}
          triviaApiParametersDTO={triviaApiParametersDTO}
          setPoints={setPoints}
        />
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  overflow-y: scroll;
  padding: 0 30px;
  display: grid;
  grid-template-rows: 20% 20% 20% auto;

  header {
    font-size: 1.2em;
    padding: 30px 10px 10px 0;
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }
`;
