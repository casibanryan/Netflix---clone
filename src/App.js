import React from 'react'
// import LandPage from './pages/LandPage';
// import SignIn from './pages/SignIn';
// import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
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
      <Home title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} />
    </>
  )
}

export default App;

