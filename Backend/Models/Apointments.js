const { mongoose } = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    token: { type: String, required: true },
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

module.exports = mongoose.model('appointments', appointmentSchema);
