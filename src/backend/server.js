//import dependencies
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

//Initialise Server
const app = express()
//Port Location
const port = 4000

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
    const mymovies = [
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "imdbID":"tt4154756",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "imdbID":"tt3498820",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
        "Title":"World War Z",
        "Year":"2013",
        "imdbID":"tt0816711",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
        ,{
        "Title":"War of the Worlds",
        "Year":"2005",
        "imdbID":"tt0407304",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        }
    ]
        
    res.json({movies:mymovies});
})

// Recieves JSON data from a post request
app.post('/api/movies', (req,res)=>{
    console.log('Movie Recieved!')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.poster)
})

//Initialise server to listen to localhost:port
app.listen(port, ()=>{
    console.log(`Server App listening at http://localhost:${port}`)
})