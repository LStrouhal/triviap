import {Select, MenuItem, FormControl} from "@material-ui/core"
import {useState} from "react";
import useStyles from "./DropdownStlye";
import styled from "styled-components/macro"

export default function DifficultySelector() {
    const style = useStyles();
    const [difficulty, setDifficulty] = useState("");

    const handleChange = selection => setDifficulty(selection.target.value);

    return (
        <Wrapper>
            <FormControl className={style.formControl}>
                <Select onChange={handleChange}>
                    <MenuItem value={"Easy"}>Easy</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"Difficult"}>Difficult</MenuItem>
                </Select>
            </FormControl>
        </Wrapper>
    )
}

const Wrapper = styled.form`
  
cursor: pointer;
  
  `