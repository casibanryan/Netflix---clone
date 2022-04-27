import React from 'react'
import Header from './sections/Header';
import VideoShowcase from './sections/VideoShowcase';
import NavBar from './include/NavBar';
import Footer from './include/Footer';
import FrequentlyAsked from './sections/FrequentlyAsked';
import './css/styles.css'


function LandPage() {
  return (
   <React.Fragment>
    
        <NavBar />
        <Header />
        <VideoShowcase />
        <FrequentlyAsked />
        <Footer />

   </React.Fragment>  
  )
}

export default LandPage;