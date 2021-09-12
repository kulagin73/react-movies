import './App.css';
import { Component } from 'react'
import Movies from './compontents/Movies';

class App extends Component {
   constructor() {
      super()
      this.state ={
        movies : []
      }
   }

   componentDidMount() {
      fetch('http://www.omdbapi.com/?s=inception&apikey=8ddd0e4a')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
   }

   render() {
      return (
        <Movies movies={this.state.movies}/>
      );
   }
}

export default App;
