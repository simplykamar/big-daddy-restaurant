import c2 from '../../img/restro/more/c2.jpg'
import c1 from '../../img/restro/more/c1.jpg'
import g1 from '../../img/restro/more/g1.jpeg'
import g2 from '../../img/restro/more/g2.jpeg'
import g3 from '../../img/restro/more/g3.jpeg'
import g4 from '../../img/restro/more/g4.jpeg'
import g5 from '../../img/restro/more/g5.jpeg'
import g6 from '../../img/restro/more/g6.png'
import g8 from '../../img/restro/more/g8.jpg'



const Gallery = () => {
	return (
			<div className="my-5">
				<h1 className="text-center">Gallery</h1><hr/>
				<div id="galleryCarousel" className="carousel slide main-carousel" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div className="carousel-item main-carousel-item">
              <img src={g8} className="d-block w-100" alt="..."/>
            </div>
          <div className="carousel-inner main-carousel-inner">
            <div className="carousel-item active main-carousel-item">
              <img src={g2} className="d-block w-100" alt="1"/>
            </div>

            <div className="carousel-item main-carousel-item">
              <img src={g3} className="d-block w-100" alt="2"/>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={g1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={g4} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={g5} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={g6} className="d-block w-100" alt="..."/>
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

			</div>
		);
}
export default Gallery;

