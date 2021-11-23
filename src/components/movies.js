//Import local Dependencies
import React, {Component} from 'react';
import MovieItem from './movieItem';

//Read Class
class Movies extends Component{
    //Render method from Component
    render(){
        //Return HTML
        return this.props.films.map((e) => {
            //Passes multiple movie items, keys and our ReloadData Method
            return <MovieItem item = {e} key={e.imdbID} ReloadData={this.props.ReloadData}></MovieItem>
        });
    }
}
//export movie class
export default Movies;