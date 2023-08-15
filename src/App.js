import React from 'react';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import {Toaster} from "react-hot-toast"


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />


        
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  );
}

export default App;
