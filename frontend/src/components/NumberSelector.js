import {Select, MenuItem, FormControl} from "@material-ui/core"
import {useState} from "react";
import useStyles from "./DropdownStlye";

export default function NumberSelector() {
    const style = useStyles();
    const [value, setValue] = useState("");

    const handleChange = selection => setValue(selection.target.value);

    return (
        <section>
            <FormControl className={style.formControl}>
                <Select onChange={handleChange}>
                    <MenuItem value={"10"}>10</MenuItem>
                    <MenuItem value={"15"}>15</MenuItem>
                    <MenuItem value={"20"}>20</MenuItem>
                    <MenuItem value={"25"}>15</MenuItem>
                    <MenuItem value={"30"}>20</MenuItem>
                    <MenuItem value={"35"}>15</MenuItem>
                    <MenuItem value={"40"}>20</MenuItem>
                </Select>
            </FormControl>
        </section>
    )
}



