const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation,
        gender: req.body.gender,
        course: req.body.course,
        image: req.body.image,
    });

    try {
        const newEmployee = await employee.save();
        res.json(newEmployee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update an employee
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }

        employee.name = req.body.name;
        employee.email = req.body.email;
        employee.mobile = req.body.mobile;
        employee.designation = req.body.designation;
        employee.gender = req.body.gender;
        employee.course = req.body.course;
        employee.image = req.body.image;

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }

        await employee.remove();
        res.json({ msg: 'Employee removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
