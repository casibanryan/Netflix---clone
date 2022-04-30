import React from 'react'
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import ShowCase from '../sections/ShowCase';
import FrequentlyAsked from '../sections/FrequentlyAsked';
import '../css/styles.css'

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
