const { response } = require('express');
const { format, send } = require('express/lib/response');
const conn = require('../db/db');
const rules = require('../rules/rules')

// emulated users clients
const users = [
    {
        id: 1,
        email: "teste@teste.com",
        pass: "01470258"    
    },
    {
        id: 3,
        email: "teste2@teste.com",
        pass: "01470258"
    }
] 

// Create a movies
exports.post = (req, res) => {
    const err = rules.checkFields(req.body);
    if(err){
        throw res.json({message: "A of the fields is empty!"})
    }

    const {name, year, time} = req.body;
    const query = 'INSERT INTO movies SET ?';

    const form_movie = {
        movie_id: null,
        movie_name: name,
        movie_year: year,
        movie_time: time,
        movie_update: new Date(),
        movie_delete: 0
    }



    const resp = (err) => {
        if(err){
            res.status(404).send("Not found!");
        }

        res.json({status : "Inserted Movie Successefully!"});
    }

    conn.query(query, form_movie, resp)

}

// List all movies
exports.get = (req, res) => {
    const query = 'SELECT * FROM movies';
    const resp = (err, results) => {
        if(err){
            res.status(404).send("Not found!");
        }

        res.json(results);
    }

    conn.query(query, resp)
}

// List one or many movies
exports.getById = (req, res) => {
    const id = req.params.id;
    const queryToOne = `SELECT * FROM movies WHERE movie_id=?`

    const resp = (err, results) => {
        if(err){
            res.status(404).send("Not found!");
        }
        
        res.json(results);
        
    }

    conn.query(queryToOne, id, resp)
}

// Update list of movies
exports.put = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE movies SET ? WHERE movie_id=?`;
    const {name, year, time} = req.body;

    const form_update = {
        movie_id: id,
        movie_name: name,
        movie_year: year,
        movie_time: time,
        movie_update: new Date(),
        movie_delete: 0,
    }

    const resp = (err, results) => {
        if(err){
            res.status(404).send("Not Found");
        }
        
        res.json(results);
        
    }


    conn.query(query, [form_update, id], resp)
}

// Delete a movie
exports.delete = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM movies WHERE movie_id=?"

    const resp = (err, results) => {
        if(err){
            res.status(404).send("Not Found");
        }
        
        res.json(results);
        
    }

    conn.query(query, id, resp)
}

// List all movies evaluateds
exports.getEvaluateds = (req, res) => {
    const query = `SELECT users.user_id AS "userID", 
                        movies.movie_name AS "Nome do Filme", 
                        movies.movie_year AS "Ano", 
                        movies.movie_time AS "Duração",
                        rates.rate_valuetion AS "Nota"
                    FROM rates
                    JOIN movies ON rates.movie_id = movies.movie_id
                    JOIN users ON rates.user_id = users.user_id
                    WHERE rates.user_id != ?;                
    `
    console.log("teste")
    const resp = (err, results) => {
        if(err){
            res.status(404).send("Not found!");
        }
        
        res.json(results);
        
    }
    conn.query(query, users[0].id, resp)
}

// List all movies not evaluateds
exports.getNotvaluateds = (req, res) => {
    const query = `SELECT * FROM movies
                    WHERE NOT EXISTS 
                    (SELECT * FROM users
                    JOIN rates ON rates.user_id = users.user_id
                    WHERE users.user_id = ? AND movies.movie_id = rates.movie_id);                
    `

    const resp = (err, results) => {
        if(err){
            res.status(404).send("Not found!");
        }
        
        res.json(results);
        
    }
    conn.query(query, users[0].id, resp)
}

// Post evaluation
exports.postEvaluation = (req, res) => {
    const {valuetion, movie_id, user_id} = req.body;
    const query = `INSERT INTO rates SET ?`
    const form_evaluation = {
        rate_id: null,
        rate_valuetion: valuetion,
        movie_id: movie_id,
        user_id: user_id
    }

    const resp = (err) => {
        if(err){
            res.status(404).send("Not found!");
        }

        res.json({status : "Inserted Movie Successefully!"});
    }

    conn.query(query, form_evaluation, resp)
}