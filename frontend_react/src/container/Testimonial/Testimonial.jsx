import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "./../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const brandQuery = '*[_type == "brands"]';
		const query = '*[_type == "testimonials"]';

		// Fetch Testimonials and Brand data from Sanity Backend
		client.fetch(query).then((data) => {
			setTestimonials(data);
		});

		client.fetch(brandQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	const test = testimonials[currentIndex];

	return (
		<>
			{testimonials.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<img src={urlFor(test.imageUrl)} alt={test.name} />
						<div className="app__testimonial-content">
							<p className="p-text">{test.feedback} </p>

							<div>
								<h4 className="bold-text">{test.name}</h4>
								<h5 className="p-text">{test.company}</h5>
							</div>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}
						>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}
						>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div 
          whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5, type: "tween"}}
          key={index}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonials"),
	"testimonials",
	"app__primarybg"
);
