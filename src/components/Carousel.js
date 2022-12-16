import img1 from '../img/restro/img1.jpg';
import pizza from '../img/menu-item/pizza.jpg';
import burger from '../img/menu-item/burger.jpg';
import tiffin1 from '../img/restro/tiffin1.jpg';
import img2 from '../img/restro/more/img2.jpg';
import party3 from '../img/restro/party3.jpg';
import paneer from '../img/menu-item/paneer.jpg';
import Navbar from './Navbar'
import './Carousel.css'

const Carousel = () => {
  return (
        <div id="carouselExampleCaptions" className="carousel slide main-carousel" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            
          </div>
          <div className="carousel-inner main-carousel-inner">

            <div className="carousel-item active main-carousel-item">
              <img src={pizza} className="d-block w-100" alt="1"/>
              <div className="carousel-caption ">
                <h2>Tasty & Delicious Food</h2>
              </div>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={tiffin1} className="d-block w-100" alt="2"/>
              <div className="carousel-caption">
                <h2>Tiffin Service Available</h2>
              </div>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={img2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h2>Book a table</h2>
                <p>Book a table for yourself at any time convenient for you.</p>
              </div>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={burger} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h2>hungry? let's meat up…</h2>
              </div>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={party3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h2>Organise Your Party here, Share Your Moments In Our Restaurant.</h2>
              </div>
            </div>
            <div className="carousel-item main-carousel-item">
              <img src={paneer} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h2>A Food that blow your mind</h2>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        );
          }

  export default Carousel;