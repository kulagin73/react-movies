import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
     
    return (
        <div className="container movies">
            {props.movies.map((elem,index) => {
                return <Movie key={index} movie={elem}/>
            })}
        </div>
    );
    
 }
 
 export default Movies;