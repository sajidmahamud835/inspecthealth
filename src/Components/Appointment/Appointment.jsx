import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <section className="appointment-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold text-primary">Schedule Your Appointment</h1>
                    <p className="lead text-muted">Book a consultation with our healthcare professionals at a time that works for you.</p>
                </div>

                <div className="row g-4">
                    {/* Calendly Column */}
                    <div className="col-lg-8">
                        <div className="calendly-card">
                            <h3 className="h5 mb-3">📅 Pick a Time</h3>
                            <div className="calendly-embed">
                                <iframe
                                    src="https://calendly.com/sajidmahamud835/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=0862c8"
                                    width="100%"
                                    height="650"
                                    frameBorder="0"
                                    title="Schedule Appointment"
                                    style={{ borderRadius: '12px', minHeight: '650px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="col-lg-4">
                        <div className="info-card">
                            <h3 className="h5 mb-4">🏥 Why Book With Us?</h3>

                            <div className="info-item">
                                <span className="info-icon">✓</span>
                                <div>
                                    <strong>Expert Doctors</strong>
                                    <p className="text-muted mb-0">Board-certified specialists</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">✓</span>
                                <div>
                                    <strong>Flexible Scheduling</strong>
                                    <p className="text-muted mb-0">Choose what works for you</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">✓</span>
                                <div>
                                    <strong>Telemedicine Available</strong>
                                    <p className="text-muted mb-0">Virtual consultations supported</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">✓</span>
                                <div>
                                    <strong>Reminder Notifications</strong>
                                    <p className="text-muted mb-0">Email & calendar sync</p>
                                </div>
                            </div>

                            <hr />

                            <div className="contact-fallback">
                                <p className="small text-muted">Prefer to call?</p>
                                <a href="tel:+1234567890" className="btn btn-outline-primary btn-sm">
                                    📞 Call Us: (123) 456-7890
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
