import React, {useState, useEffect} from 'react'
import axios from '../js/axios';
import '../css/home.css';
import '../css/bootstrap.min.css';
import '../css/slicknav.min.css';
import '../css/icofont.css';
import '../css/owl.carousel.css';
import '../css/magnific-popup.css';
import '../css/responsive.css'
import Header from './sections/home/Header';
import HeroArea from './sections/home/HeroArea';
import Movie from '/sections/home/Movie';
import Footer from './sections/home/Footer';



const baseUrl = "https://image.tmdb.org/t/p/original/";

function Home({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    // making request to TMDB
    // every time the row reloads
    useEffect(() => {

        // using async function to make the program fast
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }            
        fetchData();
 
     }, [fetchUrl])    // if [] => dependency is empty means run once when page loads and dont't run again
    
  return (
    <React.Fragment>
     <Header />
        <HeroArea />
        <Movie />
        <Footer />
       
    </React.Fragment>
  )
}

export default Home;