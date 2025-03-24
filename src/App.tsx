import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import globalTheme from "./styles/globalTheme"
import { GlobalStyles } from "./styles/globalStyles";
function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
        <Header />
    </ThemeProvider>
  );
}

export default App
