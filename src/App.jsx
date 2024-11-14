import Auth from "./components/authpage/Auth"
import { useState } from "react"
import Home from "./components/homepage/Home"
import Navigationbar from "./components/header/Navigationbar"

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

  

  return (
    <>
      <Navigationbar />
      {/* {isLoggedIn ? (<Home setLogin={setIsLoggedIn}/>) : (<Auth setLogin={setIsLoggedIn}/>)} */}
    </>
  )
}

export default App