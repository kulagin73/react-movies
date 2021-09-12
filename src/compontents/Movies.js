import { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {

    render() {
        return (
            <div>
                {this.props.movies.map((elem,index) => {
                    return (
                        <Movie key={index} movie={elem}/>
                    )
                })}
            </div>
        );
    }
 }
 
 export default Movies;