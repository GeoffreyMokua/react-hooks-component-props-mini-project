import React from "react";

function About({ image, about }) {
	return (
		<div>
			<aside>
				{image ? (
					<img src={image} alt="blog logo" />
				) : (
					<img src="https://via.placeholder.com/215" alt="blog logo" />
				)}
				<p>{about}</p>
			</aside>
		</div>
	);
}

export default About;