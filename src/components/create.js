//Import local Dependencies
import React, { Component } from 'react';

//Create Class
class Create extends Component {

    constructor() {
        super();

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
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert(`Movie: ${this.state.Title} ~ ${this.state.Year} ~ ${this.state.Poster}`);
    }
    //Render Method from Component Class
    render() {
        return (
            <div className='App'>
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
                            value='Add Movie' />
                    </div>
                </form>
            </div>
        );
    }
}
//export create class
export default Create;