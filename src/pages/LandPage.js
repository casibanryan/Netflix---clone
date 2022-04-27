import React from 'react'
import Footer from '../include/Footer';
import Header from '../sections/Header';
import ShowCase from '../sections/ShowCase';
import FrequentlyAsked from '../sections/FrequentlyAsked';


function LandPage() {
  return (
        <>
          <Header />
          <ShowCase />
          <FrequentlyAsked />
        <Footer />
        </>
  )
}

export default LandPage;
