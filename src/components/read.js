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

    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response) => {
            this.setState({ mymovies : response.data.movies});
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