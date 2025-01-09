const express = require('express');
const basicRouting = require('./routes/basicRoute');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(express.static('public')); // Serve static files
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// Routes
app.use('/', basicRouting);

// Start the server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
