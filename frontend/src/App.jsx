import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/Dashboard"
import { Signup } from "./pages/Signup"
import { Transfer } from "./pages/Transfer"

function App() {

  return (
    
    <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = {<Signup/>}/>
          <Route path = '/signin' element = {<Signin/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path = '/transfer' element = {<Transfer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
