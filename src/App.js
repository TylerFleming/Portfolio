import { StyledSiteContainer } from "./Styles/SiteContainer.styles";
import { GlobalStyle } from "./Styles/GlobalStyle"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { blueTheme } from "./Styles/Theme"

function App() {

  const [theme, setTheme] = useState('blue')

  const themeToggler = () => {
    theme === 'blue' ? setTheme('blueTheme') : setTheme(null)
  }

  return (
        <>
        <ThemeProvider theme={theme === 'blue' ? blueTheme : null }>
          <GlobalStyle />
          <StyledSiteContainer />
        </ThemeProvider>
        </>
  );
}

export default App;
