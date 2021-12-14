const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const { response } = require('express')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'theverybest',
    database: 'ordertracker_rsq'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3001, () => {
    console.log("running on port 3001")
})


app.post('/api/vendor/insert', (request, response) => {
    const name = request.body.name
    const sqlInsert = "INSERT INTO vendors (name) VALUES (?)"
    db.query(sqlInsert, [name], (error, result) => {
        response.send(result)
        console.log(result.insertId)
    })
})


app.get('/api/vendor/get', (request, response) => {
    const sqlSelect = "SELECT * FROM vendors"
    db.query(sqlSelect, (error, result) => {
        response.send(result)
        console.log("api/vendor/get result: ", result)
    })
})

app.delete('/api/vendor/delete/:id', (request, response) => {
    const id = request.params.id
    const sqlDelete = "DELETE FROM vendors WHERE id = ?"
    db.query(sqlDelete, id, (error, result) => {
        if (error) console.log(error)
    })
})






// OLD STUFF BELOW HERE

app.post('/api/insert', (request, response) => {
    const movieName = request.body.movieName
    const movieReview = request.body.movieReview
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (error, result) => {

    })
})

app.get('/api/get', (request, response) => {
    const sqlSelect = "SELECT * FROM movie_reviews"
    db.query(sqlSelect, (error, result) => {
        response.send(result)
    })
})

app.delete('/api/delete/:movieName', (request, response) => {
    const name = request.params.movieName
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?"
    db.query(sqlDelete, name, (error, result) => {
        if (error) console.log(error)
    })
})

app.put("/api/update/:movieName", (request, response) => {
    const name = request.params.movieName
    const review = request.body.movieReview
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?"
    db.query(sqlUpdate, [review, name], (error, result) => {
        if (error) console.log(error)
    })
})