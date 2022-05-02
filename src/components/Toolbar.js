import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountIcon from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/ModeNight';
import ButtonComponent from './UI/ButtonComponent';
import { ThemeModeContext } from './ThemeModeProvider';
import NoteBoardInputContainer from './noteBoard/NoteBoardInputContainer';

const useStyles = makeStyles({
  toolbarContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '3rem',
  },
});

function Toolbar({ items, setItems, setSideMenuOpen }) {
  const classes = useStyles();

  const { darkMode, setDarkMode } = useContext(ThemeModeContext);

  const toolbarItems = [
    {
      id: 'menu',
      component: (
        <ButtonComponent
          key="menu"
          iconButton
          onClick={() => setSideMenuOpen(true)}
        >
          <MenuIcon />
        </ButtonComponent>
      ),
      onClick: () => setSideMenuOpen(true),
    },
    {
      id: 'noteInputContainaer',
      component: (
        <NoteBoardInputContainer
          key="noteInputContainer"
          items={items}
          setItems={setItems}
        />
      ),
      onClick: () => {},
    },
    {
      id: 'account',
      component: (
        <ButtonComponent key="account" iconButton>
          <AccountIcon />
        </ButtonComponent>
      ),
      onClick: () => {},
    },
    {
      id: 'theme',
      component: (
        <ButtonComponent
          key="theme"
          iconButton
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </ButtonComponent>
      ),
      onClick: () => {},
    },
  ];

  return (
    <div className={classes.toolbarContainer}>
      {toolbarItems.map(({ component }) => component)}
    </div>
  );
}

Toolbar.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(Object),
    PropTypes.instanceOf(Array),
  ]),
  setItems: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  items: [],
};

export default Toolbar;
