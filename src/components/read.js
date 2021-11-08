//Import local Dependencies
import axios from 'axios';
import React, { Component } from 'react';
import Movies from './movies';

//Read Class
class Read extends Component {
    //Read State, stores Component Data
    state = {
        mymovies: [ ]
    };
    //Listen to local server for movie data
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            this.setState({ mymovies : response.data});
        }).catch((e) => {
            console.log(e);
        });
    }
    //Render method from Component
    render() {
        //Return HTML
        return (
            <div>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
//Export read class
export default Read;