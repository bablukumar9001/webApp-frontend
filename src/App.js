import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';


import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from './components/Signup';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={< Home />} />
        <Route path="/home" element={< Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/signin" element={< Login />} />

      </Routes>


    </BrowserRouter>

  )
}

export default App;
