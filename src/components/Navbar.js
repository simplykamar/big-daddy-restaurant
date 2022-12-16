import './Navbar.css';
import logo2 from '../img/restro/logo2.png'
const Navbar = () =>{
  return(
    <div>
    {/*<div className="container-fluid">
        <div className="row bg-dark text-light pt-2">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <p><i class="fa-solid fa-phone-volume"></i> +91 123456789</p>
          </div>
          
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <p><i class="fa-solid fa-paper-plane"></i> test@gmail.com</p>
                
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <p><i class="fa-solid fa-clock"></i> 10AM to 9PM</p>
                
          </div>
        </div>
        </div>*/}

        <nav className="navbar text-center p-0 navbar-expand-lg fixed-top navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand font-weight-bolder" href="#">Big Daddy<img src={logo2} className="img-fluid logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*<ul className="navbar-nav ms">
            <p><i class="fa-solid fa-phone-volume"></i> +91 123456789</p>
          </ul>*/}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="tel:9634142017" className="nav-link"><i class="fa-solid fa-phone-volume"></i> +91 123456789</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu-section">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#booking-section">Booking</a>
            </li>
           
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
    );
}
export default Navbar;