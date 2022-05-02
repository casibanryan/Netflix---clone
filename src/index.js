import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignIn from './pages/SignIn';
import LandPage from './pages/LandPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Routes>
          <Route path="/" element={ <LandPage />} />
          <Route path="/signOut" element={ <LandPage />} />
          <Route path="/signIn" element= { <SignIn />} />
          <Route path="/home" element={ <App />} />
      </Routes>
 </Router>
);

