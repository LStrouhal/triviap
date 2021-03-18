import {Select, MenuItem, FormControl} from "@material-ui/core"
import {useState} from "react";
import useStyles from "./DropdownStyle";

export default function NumberSelector() {
    const style = useStyles();
    const [value, setValue] = useState("");

    const handleChange = selection => setValue(selection.target.value);

    return (
        <section>
            <FormControl className={style.formControl}>
                <Select className={style.Select} disableUnderline={true} onChange={handleChange}>
                    <MenuItem className = {style.MenuItem} value={"10"}>10</MenuItem>
                    <MenuItem className = {style.MenuItem} value={"15"}>15</MenuItem>
                    <MenuItem className = {style.MenuItem} value={"20"}>20</MenuItem>
                    <MenuItem className = {style.MenuItem} value={"25"}>25</MenuItem>
                    <MenuItem className = {style.MenuItem} value={"30"}>30</MenuItem>
                    <MenuItem className = {style.MenuItem} value={"35"}>35</MenuItem>
                    <MenuItem className = {style.MenuItem} value={"40"}>40</MenuItem>
                </Select>
            </FormControl>
        </section>
    )
}



