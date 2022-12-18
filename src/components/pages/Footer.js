import './Footer.css'

const Footer = () => {
	return(
		<div>
		<footer className="">
			 <div className="row container-fluid">
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12">
			 		<h4 className="text-light"><i class="fa-solid fa-location-dot"></i> Address</h4>
			 		<p className="remove-underline"><a href="https://www.google.co.in/maps/place/Big+daddy+for+foodies+%26+cafe/@26.2858605,82.0781298,17z/data=!3m1!4b1!4m6!3m5!1s0x399a7b4913586e53:0xb5e4af0d5eed4237!8m2!3d26.2858605!4d82.0781298!16s%2Fg%2F11k3s92rlf?authuser=0&hl=en">Kasba Kni - Sultanpur </a></p>
  			<iframe className="mt-lg-5 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831554.1133246587!2d79.9687548!3d26.2858605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7b4913586e53%3A0xb5e4af0d5eed4237!2sBig%20daddy%20for%20foodies%20%26%20cafe!5e0!3m2!1sen!2sin!4v1671362404680!5m2!1sen!2sin" width="320" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

			 	</div>
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
			 		<h4 className="text-light">Reservation</h4>
			 		<p className="remove-underline">
			 			<a href="tel:9044152088"><i class="fa-solid fa-phone-volume"></i> Phone: +91 9044152088</a><br/>
			 		 </p>
			 		<p><i class="fa-solid fa-envelope"></i> Email: test@gmail.com </p>

			 	</div>
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
			 		<h4 className="text-light">Opening Hours</h4>
			 		<p><i class="fa-solid fa-clock"></i> Mon-Sun: 10AM - 11PM </p>
			 	</div>
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
			 		<h4 className="text-light">Follow Us</h4>
			 		<a href="https://www.instagram.com/bigdaddyforfoodies/?igshid=MDM4ZDc5MmU="><i class="fa-brands fa-instagram fa-2x mb-2"></i></a>
			 	</div><hr/>
			 </div>
			 <p>© Copyright 2022 <span className="font-weight-bolder">Big Daddy</span>, Designed by Kamar Alam.</p>
		</footer>
		</div>
		);
}
export default Footer