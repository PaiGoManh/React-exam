import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">Welcome to Your Appointment Scheduler</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white overflow-hidden shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Manage Appointments</h2>
                    <p className="text-gray-700">
                        Manage your upcoming appointments with ease. Add new appointments,
                        view scheduled appointments, and more.
                    </p>
                    <Link
                        to="/addappointment"
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Appointment
                    </Link>
                </div>
                <div className="bg-white overflow-hidden shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">View Appointments</h2>
                    <p className="text-gray-700">
                        View all your upcoming appointments in one place. Get details about
                        appointment date, time, doctor, and more.
                    </p>
                    <Link
                        to="/appointments"
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        My Appointments
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
