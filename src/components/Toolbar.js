import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/ModeNight";
import ButtonComponent from "./UI/ButtonComponent";
import { ThemeModeContext } from "./ThemeModeProvider";
import BulletinBoardInputContainer from "./noteBoard/NoteBoardInputContainer";

const useStyles = makeStyles({
  toolbarContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "3rem",
  },
  icon: {},
});

const Toolbar = ({ items, setItems }) => {
  const classes = useStyles();

  const { darkMode, setDarkMode } = useContext(ThemeModeContext);

  return (
    <div className={classes.toolbarContainer}>
      <BulletinBoardInputContainer items={items} setItems={setItems} />
      <ButtonComponent
        iconButton
        classes={classes.iconButton}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </ButtonComponent>
    </div>
  );
};

export default Toolbar;
