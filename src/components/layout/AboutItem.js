import React from 'react';

const AboutItem = ({ about }) => {
	return (
		<div>
			<div>
				<div dangerouslySetInnerHTML={{ __html: about.content.rendered }}></div>
				<a
					href={about.acf.link}
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					{about.acf.namelink}
				</a>
			</div>
		</div>
	);
};

export default AboutItem;
