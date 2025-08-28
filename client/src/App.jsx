import './App.css'
import Login from "./pages/Login"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';


function App () {


  return (
    <Router>
     <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='/register' element={<Register/>} />
       
     </Routes>
    </Router>
  )
}

export default App;