import React from 'react'
import Banner from './sections/Banner';
import './css/App.css';
// import LandPage from './pages/LandPage';
// import SignIn from './pages/SignIn';
// import {Routes, Route} from 'react-router-dom';

import Row from './Row';
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
      <div className="app">
      {/* banner */}
          <Banner />
            <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} /> 
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> 
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> 
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
        </div>
    </>
  )
}

export default App;

