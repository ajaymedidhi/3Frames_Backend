
const express = require('express');
const { addStudent, getStudents, deleteStudent } = require('../controllers/studentController');

const router = express.Router();

// POST route to add a student
router.post('/students', addStudent);

// GET route to fetch all students
router.get('/students', getStudents);

// DELETE route to delete a student by ID
router.delete('/students/:id', deleteStudent);

module.exports = router;
