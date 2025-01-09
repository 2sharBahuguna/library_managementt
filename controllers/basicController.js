// controllers/basicController.js

const pool = require('../db');

// Get all books in the library
async function getAll(req, res) {
    try {
        const result = await pool.query('SELECT * FROM library');
        res.render('index.ejs',{result: result.rows}) // Send the books as JSON
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to fetch books" });
    }
}

// Add a new book to the library
async function add(req, res) {
    const { book_name, author } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO library(book_name, author) VALUES($1, $2) RETURNING *', 
            [book_name, author]
        );
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to add book" });
    }

    res.redirect('/');
}

async function addPage(req,res){
    res.render('add.ejs');
}

// Set up the library table (if not already set up)
async function setting_up(req, res) {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS library(id SERIAL PRIMARY KEY, book_name VARCHAR(50), author VARCHAR(50))');
        res.status(200).send({ message: "Library table is set up" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Failed to set up the library table" });
    }
}

module.exports = {
    setting_up,
    getAll,
    add,addPage
};
