import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact } from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Users from "./pages/Users"

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/users' element={<Users />}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
