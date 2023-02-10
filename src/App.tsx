import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Switch from "react-switch";
import { phrases } from "./phrases";
import { darkTheme, lightTheme } from "./Styles/Theme";
import biscoito from "./assets/biscoito.png";
import * as C from "./Styles/AppStyled";

function App() {
  const [phrase, setPhrase] = useState("");
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handlePhrase = () => {
    let phrase = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[phrase]);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <C.Container>
        <C.BiscuitImage src={biscoito} alt="biscoito" />
        <Switch
          onChange={() => themeToggler()}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          onColor="#f5f5f5"
          offColor="#121212"
          offHandleColor="#00f"
          onHandleColor="#0f0"
          handleDiameter={20}
        />
        <C.Button onClick={handlePhrase}>Abrir biscoito</C.Button>
        <C.Phrase>{phrase}</C.Phrase>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
