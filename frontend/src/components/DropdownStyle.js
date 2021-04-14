import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "315",
    background: "#f7f7f2",
    fontSize: "0.7em",
    borderRadius: "10px",
  },
  MenuItem: { fontSize: "0.9em" },
  Select: { marginLeft: 7, fontFamily: "Playfair Display, serif" },
}));

export default useStyles;
