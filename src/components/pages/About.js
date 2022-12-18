// import './About.css';
import aboutImg from '../../img/restro/more/aboutImg.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPotFood } from '@fortawesome/free-solid-svg-icons'
// import 'font-awesome/css/font-awesome.min.css';
const About = () =>{
  return(
        <div className="container-fluid my-5" id="about-section">
        <h2 className="mb-5 text-center">ABOUT US<hr/></h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="inner">
                <img src={aboutImg} className="img-fluid on-hover-effect" data-aos="fade-left"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mt-sm-0 mt-lg-0 mt-md-0">
              <h4 className="text-center">Our Mission:</h4>
              <div data-aos="fade-right">
              <p className="text-secondary">To serve healthy and hygienic food with unparalleled services with the high level of consistency to our valuable customers.</p>
                <span className="text-dark">Welcome To Big Daddy!</span> 
                <ul className="text-secondary">
                <li>We have a varieties of dishes, coffee and Tea.</li>
                <li>Live Music.</li>
                <li>
                  In a hygienic environment, where our customer’s wellbeing holds an optimum value.
                </li>
                <li>
                  Under the guidance of experienced and dedicated team who are always eager to serve in your best interest.
                </li>
                </ul>
                <span className="text-dark">Values:</span>
                <ul className="text-secondary">
                  <li>
                  We are committed to food safety & food hygienic.
                  </li>
                  <li>
                    We are dedicated to best service.
                  </li>
                  </ul>
                <span className="text-dark">Additional Services:</span>
                <ul className="text-secondary">
                  <li>
                    Delivery service.
                  </li>
                   <li>Weekly Lunch Box.</li>
                  <li>
                    Event Planning.
                  </li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-center">Meet, Eat & Enjoy the true tast</h2>
          </div>

            <div className="row my-5 text-center">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3"  data-aos="flip-left">
                <i class="fa-solid fa-champagne-glasses fa-2x"></i>
                <h4>Drinks</h4>
                
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3" data-aos="flip-left">
                <i class="fa-solid fa-utensils fa-2x"></i>
                <i class="fa-solid fa-bowl-food fa-2x"></i>
                <h4>Lunch</h4>
                
              </div>
            
            <div className="col-lg-3 col-md-3 col-sm-3 col-3" data-aos="flip-right">
                <i class="fa-solid fa-mug-saucer fa-2x"></i>
                <h4>Coffee</h4>
                
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3" data-aos="flip-right">
                <i class="fa-solid fa-burger fa-2x"></i>
                <i class="fa-solid fa-pizza-slice fa-2x"></i>
                <h4>Snacks</h4>
                
            </div>
          </div>

        </div>
    );
}
export default About;