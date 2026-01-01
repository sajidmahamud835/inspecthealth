import React, { useEffect, useState } from 'react';
import './Home.css';
import image1 from '../../images/image-1.svg';
import image2 from '../../images/image-2.svg';
import image3 from '../../images/image-3.svg';
import image4 from '../../images/image-4.svg';
import client from '../../images/Ellipse 5.png';
import Post from '../Post/Post';
import Services from '../Services/Services';

const Home = () => {

	const [post, setPost] = useState([]);

	useEffect(() => {
		console.log('product api called');
		fetch('/post.JSON')
			.then(res => res.json())
			.then(data => {
				setPost(data);
				console.log('products received');
			})
	}, [])

	return (
		<div>
			<div className="container">
				<div className="row pt-5 px-3">
					<div className="col-md-6 hero-content">
						<h2 className="small bg-light text-primary d-inline p-1 rounded-pill">Good health, good life</h2>
						<h1 className="my-2">Schedule Your Health Checkup Today!</h1>
						<p>Inspect health, scheduled health checkup, monthly membership. Prevention is better than cure. Frequent health inspections will help you to prevent several incoming diseases on time.</p>
						<p><em>Our monthly membership starts from only 9$ per month. All membership comes with health insurance coverage.<strong className="text-danger">*</strong></em></p>
						<button type="button" className="btn btn-primary">Get Started</button>
					</div>
					<div className="col-md-6">
						<img className="img-fluid" src="https://image.freepik.com/free-vector/patient-taking-medical-examination_23-2148857674.jpg" alt="" />
					</div>
				</div>
			</div>

			<div className="feature my-5">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="feature-content text-center">
								<img src={image1} alt="" />
								<h2>56789+</h2>
								<p>Patient Served</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="feature-content text-center">
								<img src={image2} alt="" />
								<h2>4568+</h2>
								<p>Registered Today</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="feature-content text-center">
								<img src={image3} alt="" />
								<h2>530+</h2>
								<p>Appointment Scheduled Today</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="feature-content text-center">
								<img src={image4} alt="" />
								<h2>320+</h2>
								<p>Appointment Done Today</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Services></Services>
			<section className="course-section pb-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 pt-3 pb-5 heading">
							<h1>Blogs</h1>
						</div>

						{
							post.map((post, index) => <Post
								key={index}
								post={post}
							>
							</Post>)
						}

					</div>
				</div>
			</section>

			<section className="testimonial pb-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12 pt-3 pb-5 heading">
							<h1>Testimonial</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2">
						</div>

						<div className="col-md-8">
							<div className="row">
								<div className="col-md-4">
									<div className="client">
										<img src={client} alt="" />
									</div>
								</div>
								<div className="col-md-8">
									<p>Best service and best care. They take care of every paintans as if they are a family member. </p>
									<small>- Murad Hossain</small>
								</div>
							</div>
						</div>

						<div className="col-md-2">
						</div>

					</div>

				</div>
			</section>
		</div>
	);
};

export default Home;