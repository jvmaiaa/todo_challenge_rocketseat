import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import globalTheme from "./styles/globalTheme"

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
    </ThemeProvider>

  )
}

export default App
