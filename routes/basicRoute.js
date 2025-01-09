// routes/basicRouting.js

const express = require('express');
const router = express.Router();
const basicController = require('../controllers/basicController');

// Route to fetch all books from the library
router.get('/', basicController.getAll);

// Route to add a new book to the library
router.post('/add', basicController.add);

router.get('/add', basicController.addPage);

// Route to set up the library table
router.get('/setup', basicController.setting_up);

module.exports = router;
