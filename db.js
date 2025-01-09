// db.js

const { Pool } = require('pg');
require('dotenv').config();
// Make sure to update these with your actual connection details
const pool = new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password: process.env.PASSWORD,
    database: "mydb"            // PostgreSQL default port
});

pool.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to postgres', err));

module.exports = pool;
