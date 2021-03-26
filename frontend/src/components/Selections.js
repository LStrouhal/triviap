import styled from "styled-components/macro"
import {useState} from "react";
import useStyles from "./DropdownStyle";
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {difficultyList} from "./DifficultyList";
import {categoryList} from "./CategoryList";
import {numberList} from "./NumberList";
import NextButton from "./NextButton";


export default function Selections() {

    const style = useStyles();

    const [category, setCategory] = useState("");
    const handleChangeCategory = selection => setCategory(selection.target.value);

    const [amount, setAmount] = useState("");
    const handleChangeNumber = selection => setAmount(selection.target.value);

    const [difficulty, setDifficulty] = useState("");
    const handleChangeDifficulty = selection => setDifficulty(selection.target.value);

    const triviaApiParametersDTO = {
        "amount": amount,
        "category": category,
        "difficulty": difficulty
    };

    return (
        <Wrapper>
            <section>
                <header> Please select number of questions:</header>
                <FormControl className={style.formControl}>
                    <Select className={style.Select} disableUnderline={true} onChange={handleChangeNumber} value={amount}>
                        {numberList.map(number =>
                            <MenuItem className={style.MenuItem} key={number.value}
                                      value={number.value}> {number.label}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </section>
            <section>
                <header> Please select category:</header>
                <FormControl className={style.formControl}>
                    <Select className={style.Select} disableUnderline={true} onChange={handleChangeCategory} value={category}>
                        {categoryList.map(category =>
                            <MenuItem key={category.value} value={category.value}> {category.label}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </section>
            <section>
                <header> Please select level:</header>
                <FormControl className={style.formControl}>
                    <Select className={style.Select} disableUnderline={true} onChange={handleChangeDifficulty} value={difficulty}>
                        {difficultyList.map(difficulty =>
                            <MenuItem key={difficulty.value} value={difficulty.value}> {difficulty.label}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </section>
            <footer>
                <NextButton triviaApiParametersDTO={triviaApiParametersDTO} />
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  overflow-y: scroll;
  padding: 0 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr auto;
  grid-gap: 10px;

  header {
    font-size: 1.2em;
    padding: 30px 10px 10px 0;
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }


`