import React from 'react'
import LandPage from './pages/LandPage';
import SignIn from './pages/SignIn';
import './css/styles.css'
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
        <React.Fragment>
          <Routes>
               <LandPage />
               <Route path="/landPage" element={ <LandPage />} />
               <Route path="signIn" element= { <SignIn />} />
          </Routes>
        </React.Fragment>
  )
}

export default App;

