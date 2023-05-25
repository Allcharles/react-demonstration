import React, { FC, useContext, useState } from "react";

// Define the type for the theme
type Theme = "light" | "dark";

// Create a Context
const ThemeContext = React.createContext<Theme>("light");

// Create a component that uses the Context
const ThemedText: FC = () => {
  const theme = useContext(ThemeContext);
  const style = {
    color: theme === "dark" ? "white" : "black",
    backgroundColor: theme === "dark" ? "black" : "white",
  };

  return <p style={style}>This is a {theme}-themed text.</p>;
};

const App: FC = () => {
  // Use state to manage the theme, defaulting to 'light'
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <ThemedText />
    </ThemeContext.Provider>
  );
};

export default App;
