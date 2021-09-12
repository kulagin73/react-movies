import { Component } from 'react';

class Movie extends Component {

    render() {
        const {index,movie} = this.props;
        return (
            <div key={index}>
                <img src={movie.Poster} alt={movie.Title}/>
                <p>{movie.Title}</p>
            </div>
        );
    }
 }
 
 export default Movie;