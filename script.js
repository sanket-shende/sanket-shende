document.addEventListener("DOMContentLoaded", () => {
	let btn = document.querySelectorAll(".nav-btn");
	let hamburger = document.getElementById("hamburger");
	let status = document.getElementById("status");

	hamburger.addEventListener("click", () => {
		btn.forEach((b) => {
            if (!(btn[0]==b)) {
                b.classList.toggle("hidden");
                b.classList.toggle("show");
            }
		});
        btn[0].classList.add("show")
	});

	emailjs.init("3OYOg0lh1AB4fwPHa");

	// Handle form submit
	document
		.getElementById("contactForm")
		.addEventListener("submit", function (e) {
			e.preventDefault();

			status.classList.add("loading");
			status.innerText = "Sending your message...";

			emailjs
				.sendForm("service_3u03sae", "template_y9595se", this)
				.then(() => {
					status.classList.remove("loading");
					status.innerText =
						"✅ Your message has been sent successfully!";
					this.reset();
				})
				.catch((err) => {
					status.classList.remove("loading");
					status.innerText = "❌ Failed to send message.";
				});
		});
});
