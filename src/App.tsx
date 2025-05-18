import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/globalStyles";
import theme from "./styles/theme";
import { HeaderInput } from "./components/HeaderInput";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <HeaderInput placeholderName="Adicione uma nova tarefa" namedButton="Criar"/>
    </ThemeProvider>
  );
}

export default App
