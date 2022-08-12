import React from "react";
import { Envelope } from "phosphor-react";

const Contact = () => {
	return (
		<section className="main_container" role="note" data-aos="fade-up" id="about">
			<article className="description-page">
				<article className="description_area">
					<Envelope size={68} color="var(--grad-purple)" />
					<h3>Drop me a line!</h3>
					<hr />

					<form
						action="https://formspree.io/xqjqgjqg"
						method="POST"
						className="form_style"
					>
						<div className="form_group">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" placeholder="Your name" />
						</div>
						<div className="form_group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" placeholder="Your email" />
						</div>
						<div className="form_group">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" placeholder="Your message" />
						</div>
						<div className="form_group">
							<button type="submit" className="btn">
								Send
							</button>
						</div>
					</form>
				</article>
			</article>
		</section>
	);
};

export default Contact;
