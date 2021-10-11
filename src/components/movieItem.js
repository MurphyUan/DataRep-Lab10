//Import local Dependencies
import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

//Create Class
class MovieItem extends Component{
    //Render Method from Component Class
    render(){
        return (
            <Card>
                <Card.Body>
                    <Card.Header>{this.props.item.Title}</Card.Header>
                    <Card.Subtitle>{this.props.item.Year}</Card.Subtitle>
                    <Card.Img src={this.props.item.Poster}></Card.Img>
                </Card.Body>
            </Card>
        );
    }
}
//export create class
export default MovieItem;