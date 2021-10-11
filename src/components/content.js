// Import local Dependencies
import React, {Component} from 'react';

//Content Class
class Content extends Component{
    //Render Method from Component Class
    render(){
        //Return HTML
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
//export content class
export default Content;