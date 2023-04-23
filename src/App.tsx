import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Main } from "./pages/main"
import { Login } from "./pages/login"
import { Navbar } from "./components/navbar"
import './App.css'

function App() {

  return (
    <div className="App">
     <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
