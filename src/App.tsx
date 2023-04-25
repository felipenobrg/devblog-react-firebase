import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Navbar } from "./components/navbar"
import './App.css'
import { CreatePost } from "./pages/create-post/index"

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/createpost" element={<CreatePost />}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
