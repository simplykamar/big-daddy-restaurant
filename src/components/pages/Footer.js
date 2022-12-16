import './Footer.css'

const Footer = () => {
	return(
		<div>
		<footer className="">
			 <div className="row container-fluid">
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12">
			 		<h4 className="text-light"><i class="fa-solid fa-location-dot"></i> Address</h4>
			 		<p>Kasba Kni - Sultanpur </p>
			 	</div>
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
			 		<h4 className="text-light">Reservation</h4>
			 		<p><i class="fa-solid fa-phone-volume"></i> Phone: +91 97656890668 </p>
			 		<p><i class="fa-solid fa-envelope"></i> Email: test@gmail.com </p>

			 	</div>
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
			 		<h4 className="text-light">Opening Hours</h4>
			 		<p><i class="fa-solid fa-clock"></i> Mon-Sun: 10AM - 11PM </p>
			 	</div>
			 	<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
			 		<h4 className="text-light">Follow Us</h4>
			 		<a href="#"><i class="fa-brands fa-instagram fa-2x mb-2"></i></a>
			 	</div><hr/>
			 </div>
			 <p>© Copyright 2022 <span className="font-weight-bolder">Big Daddy</span>, Designed by Kamar Alam.</p>
		</footer>
		</div>
		);
}
export default Footer