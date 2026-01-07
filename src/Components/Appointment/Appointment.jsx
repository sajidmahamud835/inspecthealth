import React, { useState } from 'react';
import './Appointment.css';

const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', avatar: '👩‍⚕️' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurologist', avatar: '👨‍⚕️' },
    { id: 3, name: 'Dr. Emily Rodriguez', specialty: 'Pediatrician', avatar: '👩‍⚕️' },
    { id: 4, name: 'Dr. James Wilson', specialty: 'Orthopedic', avatar: '👨‍⚕️' },
];

const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = date.getDay();

    // Add empty slots for days before the first day
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }

    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

const Appointment = () => {
    const [currentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [step, setStep] = useState(1);
    const [bookingComplete, setBookingComplete] = useState(false);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = getDaysInMonth(year, month);
    const monthName = currentDate.toLocaleString('default', { month: 'long' });

    const isToday = (date) => {
        const today = new Date();
        return date && date.toDateString() === today.toDateString();
    };

    const isPast = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date && date < today;
    };

    const handleDateSelect = (date) => {
        if (date && !isPast(date)) {
            setSelectedDate(date);
            setStep(2);
        }
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(3);
    };

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const handleBooking = () => {
        setBookingComplete(true);
    };

    const resetBooking = () => {
        setSelectedDate(null);
        setSelectedTime(null);
        setSelectedDoctor(null);
        setStep(1);
        setBookingComplete(false);
    };

    if (bookingComplete) {
        return (
            <section className="appointment-section py-5">
                <div className="container">
                    <div className="booking-success">
                        <div className="success-icon">✓</div>
                        <h2>Appointment Booked!</h2>
                        <p>Your appointment has been scheduled successfully.</p>
                        <div className="booking-details">
                            <div className="detail-item">
                                <span className="label">Date</span>
                                <span className="value">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Time</span>
                                <span className="value">{selectedTime}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Doctor</span>
                                <span className="value">{selectedDoctor?.name}</span>
                            </div>
                        </div>
                        <button onClick={resetBooking} className="btn btn-primary mt-4">
                            Book Another Appointment
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="appointment-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold text-primary">Book Your Appointment</h1>
                    <p className="lead text-muted">Select a date, time, and doctor for your visit.</p>
                </div>

                {/* Progress Steps */}
                <div className="progress-steps mb-5">
                    <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                        <span className="step-number">1</span>
                        <span className="step-label">Select Date</span>
                    </div>
                    <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                        <span className="step-number">2</span>
                        <span className="step-label">Select Time</span>
                    </div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>
                        <span className="step-number">3</span>
                        <span className="step-label">Confirm</span>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Calendar */}
                    <div className="col-lg-7">
                        <div className="calendar-card">
                            <div className="calendar-header">
                                <h3>{monthName} {year}</h3>
                            </div>
                            <div className="calendar-weekdays">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day} className="weekday">{day}</div>
                                ))}
                            </div>
                            <div className="calendar-grid">
                                {days.map((date, index) => (
                                    <button
                                        key={index}
                                        className={`calendar-day ${!date ? 'empty' : ''} ${isToday(date) ? 'today' : ''} ${isPast(date) ? 'past' : ''} ${selectedDate?.toDateString() === date?.toDateString() ? 'selected' : ''}`}
                                        onClick={() => handleDateSelect(date)}
                                        disabled={!date || isPast(date)}
                                    >
                                        {date?.getDate()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Time Slots */}
                        {step >= 2 && (
                            <div className="time-slots-card mt-4">
                                <h4>Available Times for {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</h4>
                                <div className="time-slots-grid">
                                    {timeSlots.map(time => (
                                        <button
                                            key={time}
                                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                            onClick={() => handleTimeSelect(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-5">
                        {step >= 3 ? (
                            <div className="doctor-selection">
                                <h4>Select Your Doctor</h4>
                                <div className="doctors-list">
                                    {doctors.map(doctor => (
                                        <div
                                            key={doctor.id}
                                            className={`doctor-option ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                                            onClick={() => handleDoctorSelect(doctor)}
                                        >
                                            <span className="doctor-avatar">{doctor.avatar}</span>
                                            <div className="doctor-info">
                                                <strong>{doctor.name}</strong>
                                                <span>{doctor.specialty}</span>
                                            </div>
                                            {selectedDoctor?.id === doctor.id && <span className="check">✓</span>}
                                        </div>
                                    ))}
                                </div>

                                {selectedDoctor && (
                                    <div className="booking-summary mt-4">
                                        <h5>Booking Summary</h5>
                                        <p><strong>Date:</strong> {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                                        <p><strong>Time:</strong> {selectedTime}</p>
                                        <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
                                        <button onClick={handleBooking} className="btn btn-primary w-100 mt-3">
                                            Confirm Booking
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="info-panel">
                                <h4>📋 How It Works</h4>
                                <div className="info-steps">
                                    <div className="info-step">
                                        <span className="info-icon">1</span>
                                        <p>Choose your preferred date from the calendar</p>
                                    </div>
                                    <div className="info-step">
                                        <span className="info-icon">2</span>
                                        <p>Select an available time slot</p>
                                    </div>
                                    <div className="info-step">
                                        <span className="info-icon">3</span>
                                        <p>Pick your doctor and confirm</p>
                                    </div>
                                </div>
                                <div className="info-note mt-4">
                                    <strong>💡 Tip:</strong> Morning slots (9-11 AM) typically have shorter wait times.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
