import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomepage, getLogoUrl } from '../../actions/homeActions';

const Home = ({
	home: { home, imageUrl, isLoaded },
	getHomepage,
	getLogoUrl,
}) => {
	useEffect(() => {
		getHomepage();
		// eslint-disable-next-line
	}, []);
	if (home !== null) {
		getLogoUrl(home.featured_media);
	}

	return (
		<Fragment>
			<section className="home">
				<div className="home-inner">
					<div className="inner-logo">
						{imageUrl !== '' && (
							<img className="logo" src={imageUrl} alt="Logo.svg" />
						)}
						{home !== null && (
							<div
								className="x-large"
								dangerouslySetInnerHTML={{ __html: home.title.rendered }}
							></div>
						)}
					</div>

					{home !== null && (
						<div
							dangerouslySetInnerHTML={{ __html: home.content.rendered }}
						></div>
					)}
				</div>
			</section>
		</Fragment>
	);
};

Home.propType = {
	home: PropTypes.object.isRequired,
	getHomepage: PropTypes.func.isRequired,
	getLogoUrl: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	home: state.home,
});

export default connect(mapStateToProps, { getHomepage, getLogoUrl })(Home);
