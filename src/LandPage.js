import React from 'react'
import NavBar from './include/NavBar';
import Footer from './include/Footer';
import Header from './sections/Header';
import VideoShowcase from './sections/VideoShowcase';
import FrequentlyAsked from './sections/FrequentlyAsked';
import './css/styles.css'


function LandPage() {
  return (
   <React.Fragment>
        <NavBar />
         <Header />
        <VideoShowcase />
       <Footer />

   </React.Fragment>  
  )
}

export default LandPage;