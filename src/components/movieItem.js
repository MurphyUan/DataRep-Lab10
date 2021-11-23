//Import local Dependencies
import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios'

//Create Class
class MovieItem extends Component{
    //New Constructor to bind DeleteMovie method to class
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this)
    }
    //Delete Movie Method 
    DeleteMovie(e){
        e.preventDefault()
        console.log("Delete: "+this.props.item._id)
        //Call Delete Method from backend/server using current movie id
        axios.delete("http://localhost:4000/api/movies/"+this.props.item._id)
        .then(()=>{
            //Once movie is deleted reload the read page
            this.props.ReloadData()
        })
        .catch()
    }
    //Render Method from Component Class
    render(){
        return (
            <Card>
                <Card.Body>
                    <Card.Header>{this.props.item.Title}</Card.Header>
                    <Card.Subtitle>{this.props.item.Year}</Card.Subtitle>
                    <Card.Img src={this.props.item.Poster}></Card.Img>
                </Card.Body>
                
                <Link to={"/edit/" + this.props.item._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
            </Card>
        );
    }
}
//export create class
export default MovieItem;
