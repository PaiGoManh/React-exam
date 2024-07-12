import React, { useState, useEffect } from 'react';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:5000/appointments');
                if (!response.ok) {
                    throw new Error('Failed to fetch appointments');
                }
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl mb-6 font-bold">Upcoming Appointments</h2>
            <div className="grid grid-cols-1 gap-6">
                {appointments.map((appointment) => (
                    <div
                        key={appointment._id}
                        className="bg-white overflow-hidden shadow-md rounded-lg divide-y divide-gray-200"
                    >
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Appointment Details
                            </h3>
                        </div>
                        <div className="px-4 py-4 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Token ID</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{appointment.token}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Patient Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{appointment.patientName}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Doctor Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{appointment.doctorName}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Date</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(appointment.date).toLocaleDateString()}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Time</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{appointment.time}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;
