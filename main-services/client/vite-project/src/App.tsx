import React from 'react'
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import( "./pages/Home"));
// import  Home  from "./pages/Home";
import Header from "./components/includes/header";
import './assets/css/style.css'
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FeedBack from './pages/Feedback';
import Promotions from './pages/Promotions';
import Footer from './components/includes/footer';
import Services from './pages/Services';
function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
      <Footer/>
      </>
  )
}

export default App
