import { BrowserRouter } from "react-router-dom"
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
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </ThemeProvider>




    </>
  )
}

export default App
