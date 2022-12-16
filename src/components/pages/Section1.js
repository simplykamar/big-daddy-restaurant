import balloons from '../../img/restro/balloons.png'

import './Section1.css'
const Section1 = () =>{
  return(
        <div className="container-fluid my-5">
          <div className="row text-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3" data-aos="flip-right">
              <img src={balloons} className="img-fluid balloons-size" data-aos="fade-up"/><i class="fa-solid fa-cake-candles fa-5x text-orange" data-aos="fade-down"></i>
              <h2 className="my-3">Celebrate Birthday Party</h2>
              <p>Organise Your Birthday Party here, Share Your Moments In Our Restaurant.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="flip-left">
              <div className="section1-img p-3 text-light shadow rounded-circle">
                
              </div>
            </div>
            
          </div>


        </div>
    );
}
export default Section1;