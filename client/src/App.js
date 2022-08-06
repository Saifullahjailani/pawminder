import{BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    
  </Router>

 
  )
}

export default App;
