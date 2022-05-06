import React, {useState, useEffect, useCallback} from 'react'
import Banner from './sections/Banner';
import Nav from './components/Nav';
import Footer from './sections/Footer';
import Home from './pages/Home';
import requests from './js/requests';
import {Helmet} from 'react-helmet';
import './css/App.css';
import './css/styles.css';
import watchData from './js/watchData';
import ContinueWatching from './sections/ContinueWatching';

function App() {

 /* A hook that is used to store data in the state. */
  const [watchDataList, setWatchDataList] = useState([]);

  const fetchData = useCallback(
    () => {
      fetch('./data.json')
      .then(response => console.log(response.json()))
    },
    [],
  )

  useEffect(() => {
    fetchData();
  }, [fetchData])
  
  console.log(watchDataList);
  
  return (
    <React.Fragment>
      {/* navbar */}
      <Nav />
      <div className="app">
      {/* banner */}
          <Banner />
            <Home title="New Release" fetchUrl={requests.fetchNetflixOriginals} fetchPeople={requests.fetchPeople} isLargeRow={true} />
            <ContinueWatching title="Continue Watching"  watchList={watchData} /> 
            <Home title="Trending Now" fetchUrl={requests.fetchTrending} fetchPeople={requests.fetchPeople} /> 
            <Home title="Top Rated" fetchUrl={requests.fetchTopRated} fetchPeople={requests.fetchPeople} /> 
            <Home title="Action Movies" fetchUrl={requests.fetchActionMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} fetchPeople={requests.fetchPeople} /> 
            <Home title="Documentaries" fetchUrl={requests.fetchDocumentaries} fetchPeople={requests.fetchPeople} /> 
        </div>
           <Footer />
          <Helmet>
               {/* Google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet"
                    type="text/css" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
          </Helmet>
    </React.Fragment>
  )
}

export default App;

