import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import React,{useState,useEffect} from 'react';
import Preloader from './compontents/Preloader';
import Movies from './compontents/Movies';
import Search from './compontents/Search';
import Header from './compontents/Header';


const App = () => {
  
   const [movies,setMovies] = useState([]);
   const [load,setLoad] = useState(true);


   const searchMovies = (str,searchType = 'all') => {
      setLoad(true);
      fetch(`https://www.omdbapi.com/?apikey=8ddd0e4a&s=${str ? str : 'terminator'}${searchType === 'all' ? `` : `&type=${searchType}`}`)
            .then(response => response.json())
            .then((data) => {
               setMovies(data.Search);
               setLoad(false);
            })
            .catch(err => console.log(err));
      
   }
   
   useEffect(() => {
      fetch(`https://www.omdbapi.com/?apikey=8ddd0e4a&s=terminator`)
      .then(response => response.json())
         .then((data) => {
            setMovies(data.Search);
            setLoad(false);
         })
   },[])
   
   return (
      <div>
         <Header searchMovies={searchMovies}/>
         <Search cb={searchMovies} />
            {!load? <Movies movies={movies} /> : <Preloader />}
      </div>
   );
   
}

export default App;
