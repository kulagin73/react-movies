import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Component } from 'react';
import Preloader from './compontents/Preloader';
import Movies from './compontents/Movies';
import Search from './compontents/Search';
import Header from './compontents/Header';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
   constructor() {
      super()
      this.state ={
        movies : [],
        load:true
      }
   }

   componentDidMount() {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`)
      .then(response => response.json())
         .then(data => this.setState({ movies: data.Search, load: false}))
   }

   searchMovies = (str,searchType = 'all') => {
      this.setState({load: true})
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str ? str : 'terminator'}${searchType === 'all' ? `` : `&type=${searchType}`}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, load: false }))
            .catch(err => console.log(err));
      
   }

   render() {
      return (
         <div>
            <Header searchMovies={this.searchMovies}/>
            <Search cb={this.searchMovies} />
               {!this.state.load? <Movies movies={this.state.movies} /> : <Preloader />}
         </div>
      );
   }
}

export default App;
