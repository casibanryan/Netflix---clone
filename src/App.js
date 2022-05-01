import React from 'react'
import Banner from './sections/Banner';
import Nav from './sections/Nav';
import './css/App.css';
import './css/styles.css';
// import LandPage from './pages/LandPage';
// import SignIn from './pages/SignIn';
// import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import requests from './js/requests';

// Api key =>  14d57525a7a6772b9699d35339fb5878

function App(props) {
  return (
  //       <React.Fragment>
  //         <Routes>
  //              <Route path="/" element={ <LandPage />} />
  //              <Route path="/signIn" element= { <SignIn />} />
  //         </Routes>
  //       </React.Fragment>
  // 

    <>
      {/* navbar */}
      <Nav />
      <div className="app">
      {/* banner */}
          <Banner />
            <Home title="New Release" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
            <Home title="Trending Now" fetchUrl={requests.fetchTrending} /> 
            <Home title="Top Rated" fetchUrl={requests.fetchTopRated} /> 
            <Home title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
            <Home title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
            <Home title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> 
            <Home title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
            <Home title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
        </div>
          <Footer />
    </>
  )
}

export default App;

