import React, {useState, useEffect} from 'react'
import Modal from '../components/Modal';
import axios from '../js/axios';
import '../css/Home.css';





const baseUrl = "https://image.tmdb.org/t/p/original/";

function Home({ title, fetchUrl, fetchPeople, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    // making request to TMDB
    // every time the row reloads
    useEffect(() => {
        // using async function to make the program fast
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }            
        fetchData();
     }, [fetchUrl])    // if [] => dependency is empty means run once when page loads and dont't run again
        
    const [casts, setCasts] = useState([]);
     useEffect(() => {
        async function fetchCast() {
            const request = await axios.get(fetchPeople);
            ///14uxt0jH28J9zn4vNQNTae3Bmr7.jpg
            setCasts(request.data.results)
            return request;
        }
        fetchCast();
     }, [fetchPeople])

    
  return (
          <div className="home__row">
              {/* title */}
            <h2> {title} </h2>
                    {/* container */}
                <div className="row__posters">
                     {/* looping the data  */}
                    {movies.map((movie) => (
                        <React.Fragment  key={movie.id}>
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        data-bs-toggle="modal" href={`#staticBackdrop${movie.id}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={ movie?.name || movie?.title || "..." }/>
                        {/* modal */}
                        <Modal movie={movie} casts={casts} />
                    </React.Fragment>
                     ))}
            </div>
        </div>
     
  )
}

export default Home;