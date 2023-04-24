import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Navbar } from "./components"
import './App.css'

function App() {

  return (
    <div className="App">
     <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
