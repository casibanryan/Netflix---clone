import React from 'react'
import Footer from './include/Footer';
import Header from './sections/Header';
import VideoShowcase from './sections/VideoShowcase';
import FrequentlyAsked from './sections/FrequentlyAsked';
import './css/styles.css'



function App() {
  return (
        <>
          <Header />
          <VideoShowcase />
          <FrequentlyAsked />
        <Footer />
        </>
  )
}

export default App;

