import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/globalStyles";
import { MainContent } from "./components/MainContent";

import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <MainContent />
    </ThemeProvider>
  );
}

export default App;
