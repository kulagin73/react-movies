import React from 'react';

const Movie = (props) => {
    const {index,movie} = props;

    return (
        <div key={index} className="row" id={movie.imdbID}>
            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img src={movie.Poster} alt={movie.Title} />
                        <span className="card-title">{movie.Title}</span>
                    </div>
                    <div className="card-content">
                        <span className="left">{movie.Year}</span><span className="right">{movie.Type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
    
 }
 
 export default Movie;