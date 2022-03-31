import React from "react";
import { About, Header, Skills, Footer, Testimonial, Work } from "./container";
import { Navbar } from "./components";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default App;
