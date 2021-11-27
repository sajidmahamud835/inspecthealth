import './SinglePost.css';
import thum from '../../images/Rectangle2.png';
import useAuth from '../../Hooks/useAuth';
import { Redirect } from 'react-router-dom';

const SinglePost = () => {
	const { user } = useAuth();
	return (
		<div>
			{(user.email || user.displayName) ? (
				<div className="container">
					<div className="course mt-5 mb-5">
						<img className="img" src={thum} alt="" />
						<h2>Proper Medicine</h2>
						<h5>How can you chhose the proper medicine for you? Its a little bit hard to the genaral people whom do not have medical knowledge enough. Our expart medical support team always waiting for their client to provide the best effort on their health and body. We always keep our focus on our client to give the best quality of service according to their requirements. Now a days, we are improving our services more and more to get the top position of global ranking. Our mission and vision is helping people and we always want to make sure the people's helth benifite and their body. Good mental health helps you enjoy life and cope with problems. It offers a feeling of well-being and inner strength. Just as you take care of your body by eating right and exercising, you can do things to protect your mental health. In fact, eating right and exercising can help maintain good mental health. Mind is a mental health charity in England and Wales. Founded in 1946 as the National Association for Mental Health (NAMH), it celebrated its 70th anniversary in 2016. Mind offers information and advice to people with mental health problems and lobbies government and local authorities on their behalf.</h5>
						<ul>
							<li><i className="fas fa-calendar"></i>01 June, 21</li>
							<li><i className="fas fa-user"></i> 32 Checked</li>
						</ul>
					</div>
				</div>
			) : (
				<>
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>

				</>
			)}
		</div>
	);
};

export default SinglePost;