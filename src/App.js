import './App.css';
import React from "react";
import background from './assets/bg.png'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Sidebar from './components/Sidebar.js'

// Pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Projects from './pages/Projects.js'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="text-gray-100 h-full p-4 md:p-10">
        <div className="h-full flex flex-col rounded-lg bg-gray-600 border border-gray-200 relative">

          <div className='h-full w-full absolute opacity-50' style={ { backgroundImage: 'url(' + background + ')', backgroundRepeat: 'no-repeat' }}></div>
          <Header/>
          <div className="min-h-0 flex-1 flex overflow-hidden">
            <Sidebar/>

            <main className="min-w-0 flex-1 lg:flex">
              <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/contact" element={ <Contact /> } />
                <Route exact path="/projects" element={ <Projects /> } />
              </Routes>
            </main>
          </div>

          <Footer/>
        </div>
      </div>
    </Router >
  );

  // const styles = {

  // }
}
