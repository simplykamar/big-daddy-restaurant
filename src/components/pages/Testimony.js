import c1 from '../../img/restro/more/c1.jpg'
import c2 from '../../img/restro/more/c2.jpeg'
import c3 from '../../img/restro/more/c3.jpeg'
import c4 from '../../img/restro/more/c4.jpeg'
import c7 from '../../img/restro/more/c7.jpeg'
import c5 from '../../img/restro/more/c5.jpeg'
import c6 from '../../img/restro/more/c6.jpeg'
import c8 from '../../img/restro/more/c8.jpeg'
import c9 from '../../img/restro/more/c9.jpeg'

import './Testimony.css'


const Testimony = () => {
	return (
		<div className="bg-gray text-light text-center">
		<div className="my-5 pt-3 pb-5">
			<h2> TESTIMONY</h2>
			<p>Our Happy Customer</p>

			<div id="testimony-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#testimony-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimony-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#testimony-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="row">
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c1} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Kamar Alam</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c2} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Krishan kant singh</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c3} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Hashim Ali</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c7} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Mohd Ali</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.7</span>
				</div>

			</div>
            </div>
            <div className="carousel-item">
              <div className="row">
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c4} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Mohd Rihan</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c5} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Subzar Rasool</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star-half-stroke text-warning"></i>
		                <span>4.8</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c8} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Harsh Kumar</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <span>5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c6} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Amir Ali</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>

			</div>
            </div>
            <div className="carousel-item">
              <div className="row">
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c1} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Kamar Alam</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c7} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Mohd Ali</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c8} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Harsh Kumar</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-up">
		                <img src={c9} className="img-fluid rounded-circle custom-rounded"/>
		                <h6 className="my-2">Mohd Hesham</h6>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star text-warning"></i>
		                <i class="fa-solid fa-star"></i>
		                <span>4.5</span>
				</div>

			</div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimony-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimony-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
        </div>
		);
}
export default Testimony
// <div className="container-fluid my-5">
// 			<h2> TESTIMONY</h2>
// 				<p>Our Happy Customer</p>
			// <div className="row">
			// 	<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="flip-up">
		 //                <img src={c1} className="img-fluid rounded-circle custom-rounded"/>
		 //                <h6 className="my-2">Kamar Alam</h6>
		 //                <p className="">Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                </p>
			// 	</div>
			// 	<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="flip-up">
		 //                <img src={c1} className="img-fluid rounded-circle custom-rounded"/>
		 //                <h6 className="my-2">Kamar Alam</h6>
		 //                <p className="">Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                </p>
			// 	</div>
			// 	<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="flip-up">
		 //                <img src={c1} className="img-fluid rounded-circle custom-rounded"/>
		 //                <h6 className="my-2">Kamar Alam</h6>
		 //                <p className="">Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                </p>
			// 	</div>
			// 	<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="flip-up">
		 //                <img src={c1} className="img-fluid rounded-circle custom-rounded"/>
		 //                <h6 className="my-2">Kamar Alam</h6>
		 //                <p className="">Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam Kamar Alam 
		 //                </p>
			// 	</div>

			// </div>
// 		</div>