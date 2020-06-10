import React, { useEffect, Fragment } from 'react';
import AboutItem from './AboutItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAbout } from '../../actions/aboutAction';
const About = ({ about: { about, isLoaded }, getAbout }) => {
	useEffect(() => {
		getAbout();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<h1 className="lead text-left">About</h1>
			<div className="about text-left">
				<div className="about-text">
					{about.map((a) => (
						<div className="about-inner-text" key={Math.random()}>
							<AboutItem key={a.id} about={a} />
						</div>
					))}
				</div>
				<div className="about-num">
					<div className="num">
						<h1>45</h1>
						<small>Speakers</small>
					</div>

					<div className="num">
						<h1>2</h1>
						<small>Days</small>
					</div>
				</div>

				<div className="about-num">
					<div className="num">
						<h1>50</h1>
						<small>Sessions</small>
					</div>
					<div className="num">
						<h1>10</h1>
						<small>Partners</small>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

About.propTypes = {
	about: PropTypes.object.isRequired,
	getAbout: PropTypes.func.isRequired,
};

const mapSateTpProps = (state) => ({
	about: state.about,
});

export default connect(mapSateTpProps, { getAbout })(About);
