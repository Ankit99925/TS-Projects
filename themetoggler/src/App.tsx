import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import { Card, Button } from "./components";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const themeseletor = document.querySelector("html");
    themeseletor?.classList.remove("light", "dark");
    themeseletor?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="text-6xl mb-4">Theme Toggler</div>
      <div className="flex flex-col items-center gap-4">
        <Card />
        <Button />
      </div>
    </ThemeProvider>
  );
}

export default App;
