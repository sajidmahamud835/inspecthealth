import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
	const { name, details, date, visitor, img } = props.post;
	return (
		<div className="col-md-4 mb-5">
			<div className="course">
				<img className="img-fluid" src={img} alt="" />
				<h2>{name}</h2>
				<h5>{details}</h5>
				<Link className="mt-3 btn btn-primary custom-btn" to="/post">Read more...</Link>
				<ul>
					<li><i className="fas fa-calendar"></i>{date}</li>
					<li><i className="fas fa-user"></i>{visitor} views</li>
				</ul>
			</div>
		</div>
	);
};

export default Post;