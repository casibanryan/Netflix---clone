import React from 'react'
import Footer from '../sections/landPage/Footer';
import Header from '../sections/landPage/Header';
import ShowCase from '../sections/landPage/ShowCase';
import FrequentlyAsked from '../sections/landPage/FrequentlyAsked';
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
