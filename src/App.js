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
            <Home title="New Release" fetchUrl={requests.fetchNetflixOriginals} fetchPeople={requests.fetchPeople} isLargeRow={true} />
            <Home title="Trending Now" fetchUrl={requests.fetchTrending} fetchPeople={requests.fetchPeople} /> 
            <Home title="Top Rated" fetchUrl={requests.fetchTopRated} fetchPeople={requests.fetchPeople} /> 
            <Home title="Action Movies" fetchUrl={requests.fetchActionMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Documentaries" fetchUrl={requests.fetchDocumentaries} fetchPeople={requests.fetchPeople} /> 
        </div>
    </>
  )
}

export default App;

