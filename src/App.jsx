import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Common/Navbar';
import HeaderSection from './HeaderSection/HeaderSection';
import HeroSection from './HeroSection/HeroSection';
import Footer from './Common/Footer/Footer';
import Home from './Components/Home/Home';
import Demo from './Common/DemoForm/Demo';
import Login from './Common/Login/Login';
import BlocksPage from './Components/Blocks-Page/BlocksPage';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/blockspage"; // Hide navbar & footer

  return (
    <>
      {/* < Navbar/>
      <Home />    
      <Demo />  
      <Footer /> */}
      
       {!hideLayout && <Navbar />} 
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/demo" element={<Demo/>} />
        <Route path="/login" element={<Login/> } />
        <Route path="/blockspage" element={ <BlocksPage />  } />

       
      </Routes>
      
      {!hideLayout && <Footer />}
  
    </>
  )
}

export default App
