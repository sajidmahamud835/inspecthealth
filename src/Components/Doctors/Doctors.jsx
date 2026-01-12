import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';

// Fake doctor data
const doctorsData = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        experience: "15 years",
        rating: 4.9,
        reviews: 234,
        available: true,
        nextSlot: "Today, 2:00 PM",
        bio: "Board-certified cardiologist specializing in interventional cardiology and heart failure management.",
        education: "Harvard Medical School",
        languages: ["English", "Spanish"]
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        experience: "12 years",
        rating: 4.8,
        reviews: 189,
        available: true,
        nextSlot: "Tomorrow, 10:00 AM",
        bio: "Expert in treating neurological disorders including epilepsy, migraines, and Parkinson's disease.",
        education: "Johns Hopkins University",
        languages: ["English", "Mandarin"]
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        experience: "8 years",
        rating: 4.9,
        reviews: 312,
        available: false,
        nextSlot: "Jan 10, 9:00 AM",
        bio: "Passionate about child health and development, specializing in newborn care and vaccinations.",
        education: "Stanford University",
        languages: ["English", "Portuguese"]
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Orthopedic Surgeon",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        experience: "20 years",
        rating: 4.7,
        reviews: 156,
        available: true,
        nextSlot: "Today, 4:30 PM",
        bio: "Specialized in sports medicine, joint replacements, and minimally invasive orthopedic procedures.",
        education: "Yale School of Medicine",
        languages: ["English"]
    },
    {
        id: 5,
        name: "Dr. Priya Patel",
        specialty: "Dermatologist",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        experience: "10 years",
        rating: 4.8,
        reviews: 278,
        available: true,
        nextSlot: "Tomorrow, 11:30 AM",
        bio: "Expert in medical and cosmetic dermatology, treating conditions from acne to skin cancer.",
        education: "Columbia University",
        languages: ["English", "Hindi", "Gujarati"]
    },
    {
        id: 6,
        name: "Dr. Robert Kim",
        specialty: "Psychiatrist",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        experience: "14 years",
        rating: 4.9,
        reviews: 201,
        available: false,
        nextSlot: "Jan 12, 3:00 PM",
        bio: "Specializing in anxiety disorders, depression, and cognitive behavioral therapy.",
        education: "UCLA Medical Center",
        languages: ["English", "Korean"]
    }
];

const DoctorCard = ({ doctor }) => (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="doctor-card">
            <div className="doctor-image-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <span
                    className={`availability-badge ${doctor.available ? 'available' : 'unavailable'}`}
                    aria-label={doctor.available ? "Doctor is available" : "Doctor is unavailable"}
                >
                    <span aria-hidden="true">{doctor.available ? '● ' : '○ '}</span>
                    {doctor.available ? 'Available' : 'Unavailable'}
                </span>
            </div>
            <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>

                <div className="doctor-stats">
                    <span className="stat" aria-label={`Rating: ${doctor.rating} stars out of 5, based on ${doctor.reviews} reviews`}>
                        <strong aria-hidden="true">⭐ {doctor.rating}</strong>
                        <small aria-hidden="true">({doctor.reviews} reviews)</small>
                    </span>
                    <span className="stat" aria-label={`Experience: ${doctor.experience}`}>
                        <strong aria-hidden="true">🩺 {doctor.experience}</strong>
                    </span>
                </div>

                <p className="doctor-bio">{doctor.bio}</p>

                <div className="doctor-meta">
                    <p aria-label={`Education: ${doctor.education}`}><strong aria-hidden="true">🎓</strong> {doctor.education}</p>
                    <p aria-label={`Languages spoken: ${doctor.languages.join(', ')}`}><strong aria-hidden="true">🌐</strong> {doctor.languages.join(', ')}</p>
                </div>

                <div className="next-slot">
                    <small>Next Available:</small>
                    <strong>{doctor.nextSlot}</strong>
                </div>

                <Link
                    to="/appointment"
                    className="btn btn-primary w-100 mt-3"
                    aria-label={`Book appointment with ${doctor.name}`}
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    </div>
);

const Doctors = () => {
    return (
        <section className="doctors-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold text-primary">Our Medical Team</h1>
                    <p className="lead text-muted">Meet our experienced healthcare professionals dedicated to your well-being.</p>
                </div>

                {/* Filter/Stats Bar */}
                <div className="doctors-stats mb-4">
                    <div className="stat-item">
                        <span className="stat-number">{doctorsData.length}</span>
                        <span className="stat-label">Specialists</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{doctorsData.filter(d => d.available).length}</span>
                        <span className="stat-label">Available Today</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">4.8</span>
                        <span className="stat-label">Avg Rating</span>
                    </div>
                </div>

                {/* Doctor Cards */}
                <div className="row">
                    {doctorsData.map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
