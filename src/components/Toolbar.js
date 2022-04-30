import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/ModeNight";
// import ListIcon from "@mui/icons-material/List";
import List from "@mui/icons-material/List";

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
      <ButtonComponent iconButton>
        <MenuIcon />
      </ButtonComponent>
      <BulletinBoardInputContainer items={items} setItems={setItems} />
      <ButtonComponent iconButton>
        <AccountIcon />
      </ButtonComponent>
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

Toolbar.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(Object),
    PropTypes.instanceOf(Array),
  ]).isRequired,
  setItems: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  items: [],
};

export default Toolbar;
