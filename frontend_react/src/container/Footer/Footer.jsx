import React, { useState } from "react";

import { images } from "./../../constants";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const { name, email, message } = formData;
	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);
		const contact = {
			_type: "contact",
			name,
			email,
			message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);

			setTimeout(() => {
				setFormData({ name: "", email: "", message: "" });
				setIsFormSubmitted(false);
			}, 5000);
		});
	};

	return (
		<>
			<h2 className="head-text">Take a coffee & let's chat</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<a href="mailto:isaacbotwe7@gmail.com" className="p-text">
						Email Me
					</a>
				</div>{" "}
				<div className="app__footer-card">
					<img src={images.mobile} alt="mobile" />
					<a href="tel:+233558132290" className="p-text">
						Call Me
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.cvImage} alt="CV" />
					<a href={images.cv} download="Isaac_Botwe_CV.pdf">
						Download my CV
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>{" "}
					<div className="app__flex">
						<input
							type="text"
							name="email"
							placeholder="Your email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							name="message"
							placeholder="message"
							onChange={handleChangeInput}
							value={message}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{loading ? "Sending" : "Send Message"}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
