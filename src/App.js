import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Component } from 'react';
import Preloader from './compontents/Preloader';
import Movies from './compontents/Movies';
import Search from './compontents/Search';
import Header from './compontents/Header';

class App extends Component {
   constructor() {
      super()
      this.state ={
        movies : []
      }
   }

   componentDidMount() {
      fetch('http://www.omdbapi.com/?apikey=8ddd0e4a&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
   }

   searchMovies = (str,searchType = 'all') => {
      fetch(`http://www.omdbapi.com/?apikey=8ddd0e4a&s=${str}${searchType !== 'all' ? `&type=${searchType}` : ''}`)
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search}))
   }

   render() {
      return (
         <div>
            <Header searchMovies={this.searchMovies}/>
            <Search cb={this.searchMovies} />
               {this.state.movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
         </div>
      );
   }
}

export default App;
