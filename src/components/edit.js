//Import local Dependencies
import React, { Component } from 'react';
import axios from 'axios';

//Create Class
class Edit extends Component {

    constructor() {
        super();
        //Listen to respective methods for data binding
        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        .then(res =>{
            console.log(res.data);
            this.setState({
                Title:res.data.Title,
                Year:res.data.Year,
                Poster:res.data.Poster,
                _id:res.data._id
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    //Data Binding Title
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //Data Binding Year
    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    //Data Binding Poster
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }

    //Data Binding Submission
    onSubmit(e) {
        e.preventDefault();
        //Create an alert displaying the data we are submitting
        alert(`Movie: ${this.state.Title} ~ ${this.state.Year} ~ ${this.state.Poster}`);

        //NewMovie Object to sent to local server
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data);
        })
        .catch();

        //Post to local server @ /api/movies
        // axios.post('http://localhost:4000/api/movies', newMovie)
        //     .then((res)=>{
        //         console.log(res)
        //     })
        //     .catch((err)=>{
        //         console.log(err);
        //     })
    }
    //Render Method from Component Class
    render() {
        return (
            <div className='App'>
                <h1>This is my Edit component</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}/>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}/>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}/>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            className='btn btn-primary'
                            value='Edit Movie' />
                    </div>
                </form>
            </div>
        );
    }
}
//export create class
export default Edit;