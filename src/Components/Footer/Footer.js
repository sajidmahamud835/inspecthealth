import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<footer className="pt-4 mt-2">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div> <a className="navbar-brand" href="/"><i class="fas fa-search-plus"></i> InspectHealth</a></div>
							<p class="text-footer">A trusted health-care agency where we are providing the medical and health services properly.</p>
						</div>
						<div className="col-md-3">
							<ul>
								<li><b>Services</b></li>
								<li>Doctor Appointment</li>
								<li>Medical Aid</li>
								<li>Medical Test</li>
								<li>Mental Consulting</li>
								<li>Health Advice</li>
							</ul>
						</div>
						<div className="col-md-3">
							<ul>
								<li><b>Available Now</b></li>
								<li>Medicines</li>
								<li>Doctors</li>
								<li>Nurses</li>
								<li>Consultants</li>
								<li>Advisor</li>
							</ul>
						</div>
						<div className="col-md-3">
							<ul>
								<li><b>Availavle Test</b></li>
								<li>Blood Test</li>
								<li>Weight Test for All</li>
								<li>Urine Test for All</li>
								<li>CT Scan for Children</li>
								<li>MRI For everyone</li>
							</ul>
						</div>
						<div className="text-center pt-5"><p>Copyright © 2021 <i class="fas fa-search-plus"></i> InspectHealth</p></div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;