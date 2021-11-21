//import dependencies
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')

//Initialise Server
const app = express()
//Port Location
const port = 4000

//Format for Movie Schema, imitate JSON data
const movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Poster: String
})

//create movie model to important and export data to MongoDB to Server
const movieModel = mongoose.model("Movie",movieSchema)

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

// Parse applcation/json
app.use(bodyParser.json())

// Use Cross-origin Resource Sharing
app.use(cors());

// Avoid CORS Errors when communicating between web servers
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Welcome message on localhost:port
app.get('/',(req, res) => {
    res.send('Welcome to Data Representation & Querying!')
})

// Throws JSON data onto the web @ localhost:port/api/movies
app.get('/api/movies', (req,res) => {
    
    //Gets JSON Data from mongoDB
    movieModel.find((err, data)=>{
        res.json(data);
    })
})

//Throws specfic JSON data regarding the id passed onto the web @ localhost:post/api/movies/:id
app.get('/api/movies/:id', (req,res)=>{
    console.log(req.params.id)//log the id passed to the screen
    //Only retrieve the data that is under the id :id
    movieModel.findById(req.params.id,(err,data)=>{
        res.json(data)
    })
})

//Update File through mongoDB client
app.put('/api/movies/:id', (req, res)=>{
    console.log(`Update movie: ${req.params.id}`);
    console.log(req.body);

    movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            if(err)console.log(err);
           res.send(data); 
        })
})

// Recieves JSON data from a post request
app.post('/api/movies', (req,res)=>{
    console.log('Movie Recieved!')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.poster)

    //Add new document to server
    movieModel.create({
        Title: req.body.title,
        Year: req.body.year,
        Poster: req.body.poster
    });
})

//Initialise server to listen to localhost:port
app.listen(port, ()=>{
    console.log(`Server App listening at http://localhost:${port}`)
})

//Function for connection to MongoDB Server through Mongoose
async function main(){
    await mongoose.connect(`mongodb+srv://admin:admin@cluster0.bov7h.mongodb.net/MovieDataBase?retryWrites=true&w=majority`)
}

//Initialise connection to the MongoDB Database
main().catch(e => console.log(e));
