//Import local Dependencies
import React, {Component} from 'react';
import MovieItem from './movieItem';

//Read Class
class Movies extends Component{
    //Render method from Component
    render(){
        //Return HTML
        return this.props.films.map((e) => {
            return <MovieItem item = {e} key={e.imdbID}></MovieItem>
        });
    }
}
//export movie class
export default Movies;