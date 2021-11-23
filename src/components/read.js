//Import local Dependencies
import axios from 'axios';
import React, { Component } from 'react';
import Movies from './movies';

//Read Class
class Read extends Component {
    constructor(){
        super()
        //Bind ReloadData Method to our class
        this.ReloadData = this.ReloadData.bind(this)
    }
    //Read State, stores Component Data
    state = {
        mymovies: [ ]
    };
    //Listen to local server for movie data
    componentDidMount(){
        this.ReloadData()
    }
    //Reload Method, Loads Data from our backend/server 
    ReloadData(){
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
                <Movies films={this.state.mymovies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}
//Export read class
export default Read;