import { BrowserRouter, HashRouter } from "react-router-dom"
import Router from "./components/router"
import NavBar from "./components/navbar"
import GlobalStyle from "./styles"
import { ThemeProvider } from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "./components/context"


function App() {

  const {theme} = useContext(ThemeContext)


  return (
    <>


      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <NavBar />
          <Router />
        </HashRouter>
      </ThemeProvider>




    </>
  )
}

export default App
