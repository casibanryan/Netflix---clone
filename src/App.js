import React from 'react'
import React from 'react'
import NavBar from './include/NavBar';
import Footer from './include/Footer';
import Header from './sections/Header';
import VideoShowcase from './sections/VideoShowcase';
import FrequentlyAsked from './sections/FrequentlyAsked';
import './css/styles.css'



function App() {
  return (
        <>
          <NavBar />
          <Header />
          <VideoShowcase />
        <Footer />
        </>
  )
}

export default App;

