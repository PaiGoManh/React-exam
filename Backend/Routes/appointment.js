const express = require('express');
const router = express.Router();
const Appointment = require('../Models/Apointments');
const verifyToken = require('../Middleware/authMiddleware');

router.post('/addappointment', async (req, res) => {
    try {
        const { token, patientName, doctorName, date, time } = req.body;
        const newAppointment = new Appointment({
            token,
            patientName,
            doctorName,
            date,
            time,
        });

        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add appointment' });
    }
});

router.get('/appointments',verifyToken, async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
});

module.exports = router;
