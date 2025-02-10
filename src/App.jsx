import { BrowserRouter } from "react-router-dom"
import Router from "./components/router"
import NavBar from "./components/navbar"
import GlobalStyle from "./styles"
import ThemeProvider from "./components/context"

function App() {


  return (
    <>

      <ThemeProvider>

        <GlobalStyle />

        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>

      </ThemeProvider>


    </>
  )
}

export default App
