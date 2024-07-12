import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddAppointmentForm = () => {
    const [token, setToken] = useState('');
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const AddAppointment = async (appointment) => {
        try {
            const res = await fetch('http://localhost:5000/addappointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointment),
            });

            if (!res.ok) {
                throw new Error('Failed to add');
            }

            return res.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const appointmentForm = async (e) => {
        e.preventDefault();

        const appointment = { token, patientName, doctorName, date, time };
        const res = await AddAppointment(appointment);

        if (res) {
            alert('Appointment Successful');
            // Assuming navigate is imported from your routing library
            // navigate('/home');
        } else {
            alert('Login Failed');
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md">
            <h2 className="text-2xl mb-6 font-bold">Add Appointment</h2>
            <form onSubmit={appointmentForm}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Token ID:</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Patient Name:</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Doctor Name:</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
                    <input
                        type="date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Time:</label>
                    <input
                        type="time"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Appointment
                </button>
            </form>
        </div>
    );
};

export default AddAppointmentForm;
