import { BrowserRouter } from "react-router-dom"
import Router from "./components/router"
import NavBar from "./components/navbar"
import GlobalStyle from "./styles"

function App() {


  return (
    <>

      <GlobalStyle />

      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>


    </>
  )
}

export default App
