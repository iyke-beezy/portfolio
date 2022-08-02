/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{" "}
			{["home", "about", "work", "skills", "testimonials", "contact"].map(
				(item) => (
					<a
						className="app__navigation-dot"
						href={`#${item}`}
						key={`link-${item}`}
						style={active === item ? { backgroundColor: "#313BAC" } : {}}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
