import PropTypes from "prop-types";
import {
  createContext,
  useMemo,
  useState,
  cloneElement,
  Children,
} from "react";
import { darkTheme, lightTheme } from "../theme";

export const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const memoizedValue = useMemo(() => ({
    darkMode,
    setDarkMode,
  }));

  const childrenWithTheme = Children.map(children, (child) =>
    cloneElement(child, {
      theme: darkMode ? darkTheme : lightTheme,
    })
  );

  return (
    <ThemeModeContext.Provider value={memoizedValue}>
      {childrenWithTheme}
    </ThemeModeContext.Provider>
  );
}

ThemeModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeModeProvider;
