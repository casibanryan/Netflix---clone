import React from 'react'
import LandPage from './pages/LandPage';
import SignIn from './pages/SignIn';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
        <React.Fragment>
          <Routes>
               <Route path="/" element={ <LandPage />} />
               <Route path="/signIn" element= { <SignIn />} />
          </Routes>
        </React.Fragment>
  )
}

export default App;

