import React, { useEffect, useState, Suspense } from 'react';
import './Home.css';
import heroDoctor from '../../images/hero-doctor.png';
import telemedicineIcon from '../../images/telemedicine.png';
import hospitalIcon from '../../images/hospital-discount.png';
import checkupIcon from '../../images/health-checkup.png';
import Post from '../Post/Post';

const Services = React.lazy(() => import('../Services/Services'));

const Home = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch('/post.JSON')
			.then(res => res.json())
			.then(data => setPost(data))
			.catch(err => console.log('Posts not loaded'));
	}, []);

	return (
		<div>
			{/* Hero Section */}
			<section className="hero-section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 hero-content">
							<span className="badge-primary mb-3">
								<i className="fas fa-heart-pulse me-2"></i>
								Your Health, Our Priority
							</span>
							<h1>
								Quality Healthcare <br />
								<span className="gradient-text">Accessible to All</span>
							</h1>
							<p className="lead">
								24/7 Telemedicine consultations, discounts at 500+ partner hospitals,
								and comprehensive health coverage. Experience healthcare that's always within reach.
							</p>
							<div className="hero-buttons">
								<button className="btn btn-primary me-3">
									<i className="fas fa-phone-alt me-2"></i>
									Get Started
								</button>
								<button className="btn btn-outline-primary">
									<i className="fas fa-play-circle me-2"></i>
									Learn More
								</button>
							</div>
							<div className="hero-stats">
								<div className="stat">
									<strong>1M+</strong>
									<span>Customers Served</span>
								</div>
								<div className="stat">
									<strong>500+</strong>
									<span>Partner Hospitals</span>
								</div>
								<div className="stat">
									<strong>24/7</strong>
									<span>Doctor Access</span>
								</div>
							</div>
						</div>
						<div className="col-lg-6 hero-image">
							<img
								src={heroDoctor}
								alt="Healthcare Professional"
								className="img-fluid animate-float"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* What We Offer Section */}
			<section className="features-section">
				<div className="container">
					<div className="section-title">
						<h2>What We Offer</h2>
						<p>Comprehensive healthcare solutions designed for you and your family</p>
					</div>
					<div className="row g-4">
						<div className="col-lg-4 col-md-6">
							<div className="feature-card">
								<div className="icon">
									{/* Lazy load secondary images */}
									<img src={telemedicineIcon} alt="Telemedicine" loading="lazy" />
								</div>
								<h3>24/7 Telemedicine</h3>
								<p>Connect with qualified doctors anytime via audio or video call. Get medical advice within 5 minutes.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="feature-card">
								<div className="icon">
									<img src={hospitalIcon} alt="Hospital Discount" loading="lazy" />
								</div>
								<h3>Hospital Discounts</h3>
								<p>Save up to 50% on hospitalization and diagnostic tests at 500+ partner hospitals nationwide.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="feature-card">
								<div className="icon">
									<img src={checkupIcon} alt="Health Checkup" loading="lazy" />
								</div>
								<h3>Health Checkups</h3>
								<p>Preventive care with regular health screenings. Early detection means better outcomes.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="stats-section">
				<div className="container">
					<div className="row">
						<div className="col-6 col-md-3">
							<div className="stat-item">
								<h3>56,789+</h3>
								<p>Patients Served</p>
							</div>
						</div>
						<div className="col-6 col-md-3">
							<div className="stat-item">
								<h3>4,568+</h3>
								<p>Registered Today</p>
							</div>
						</div>
						<div className="col-6 col-md-3">
							<div className="stat-item">
								<h3>530+</h3>
								<p>Appointments Today</p>
							</div>
						</div>
						<div className="col-6 col-md-3">
							<div className="stat-item">
								<h3>320+</h3>
								<p>Completed Today</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			{/* Lazy loading Services component to improve initial page load performance */}
			<Suspense fallback={<div className="text-center p-5" style={{ minHeight: '400px' }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
				<Services />
			</Suspense>

			{/* Blog Section */}
			{post.length > 0 && (
				<section className="blog-section">
					<div className="container">
						<div className="section-title">
							<h2>Health Blog</h2>
							<p>Stay informed with the latest health tips and articles</p>
						</div>
						<div className="row">
							{post.map((p, index) => (
								<Post key={index} post={p} />
							))}
						</div>
					</div>
				</section>
			)}

			{/* Testimonial Section */}
			<section className="testimonial-section">
				<div className="container">
					<div className="section-title">
						<h2>What Our Customers Say</h2>
						<p>Satisfaction of our customers is our strongest testament</p>
					</div>
					<div className="row g-4">
						<div className="col-lg-4">
							<div className="testimonial-card">
								<div className="stars mb-3">
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
								</div>
								<p className="quote">
									"Best service and best care. They take care of every patient as if they are a family member.
									I highly recommend InspectHealth to everyone!"
								</p>
								<div className="author">
									<div className="author-avatar">MH</div>
									<div className="author-info">
										<h4>Murad Hossain</h4>
										<p>Health Plan User</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-card">
								<div className="stars mb-3">
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
								</div>
								<p className="quote">
									"The telemedicine service is amazing. Got connected to a doctor within minutes and
									received excellent consultation for my daughter."
								</p>
								<div className="author">
									<div className="author-avatar">RH</div>
									<div className="author-info">
										<h4>Rajib Hossain</h4>
										<p>Premium Member</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="testimonial-card">
								<div className="stars mb-3">
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
									<i className="fas fa-star text-warning"></i>
								</div>
								<p className="quote">
									"Fast claim processing! I received my hospital cashback within just 7 days.
									InspectHealth made a difficult time much easier for me."
								</p>
								<div className="author">
									<div className="author-avatar">KB</div>
									<div className="author-info">
										<h4>Kamrul Bijoy</h4>
										<p>Health Plan User</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content text-center">
						<h2>Ready to Take Control of Your Health?</h2>
						<p>Join thousands of satisfied customers who trust InspectHealth for their healthcare needs</p>
						<button className="btn btn-light btn-lg">
							<i className="fas fa-phone-alt me-2"></i>
							Contact Us Today
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;