import {Select, MenuItem, FormControl} from "@material-ui/core"
import {useState} from "react";
import useStyles from "./DropdownStyle";

export default function CategorySelector() {

    const style = useStyles();
    const [category, setCategory] = useState("");

    const handleChange = selection => setCategory(selection.target.value);

    return (
        <section>
            <FormControl className={style.formControl}>
                <Select className={style.Select} disableUnderline={true} onChange={handleChange}>
                    <MenuItem value={1}> General Knowledge</MenuItem>
                    <MenuItem value={2}>Entertainment: Books</MenuItem>
                    <MenuItem value={3}>Entertainment: Film</MenuItem>
                    <MenuItem value={4}>Entertainment: Music</MenuItem>
                    <MenuItem value={5}>Entertainment: Musicals & Theaters</MenuItem>
                    <MenuItem value={6}>Entertainment: Television</MenuItem>
                    <MenuItem value={7}>Entertainment: Video Games</MenuItem>
                    <MenuItem value={8}>Entertainment: Board Games</MenuItem>
                    <MenuItem value={9}>Science & Nature</MenuItem>
                    <MenuItem value={10}>Science: Computers</MenuItem>
                    <MenuItem value={11}>Science Mathematics</MenuItem>
                    <MenuItem value={12}>Mythology</MenuItem>
                    <MenuItem value={13}>Sports</MenuItem>
                    <MenuItem value={14}>Geography</MenuItem>
                    <MenuItem value={15}>History</MenuItem>
                    <MenuItem value={16}>Politics</MenuItem>
                    <MenuItem value={17}>Art</MenuItem>
                    <MenuItem value={18}>Celebrities</MenuItem>
                    <MenuItem value={19}>Animals</MenuItem>
                    <MenuItem value={20}>Vehicles</MenuItem>
                    <MenuItem value={21}>Entertainment: Comics</MenuItem>
                    <MenuItem value={22}>Science: Gadgets</MenuItem>
                    <MenuItem value={23}>Entertainment: Japanese Anime & Manga</MenuItem>
                    <MenuItem value={24}>Entertainment: Cartoon & Animations</MenuItem>
                </Select>
            </FormControl>
        </section>
    )
}
