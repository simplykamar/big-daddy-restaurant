import chowmean from '../../img/menu-item/chowmean.jpg'
import coffee1 from '../../img/menu-item/coffee1.jpg'
import pizzaPaneer from '../../img/menu-item/pizza-paneer.jpg'
import paneer from '../../img/menu-item/paneer.jpg'
import roll from '../../img/menu-item/roll.png'


import './Menu.css'

const Menu = () => {
	return (
		<div className="my-5 text-center" id="menu-section">
		<h2>Check Our <span className="text-orange">Yummy Menu</span></h2>
		<div className="d-flex justify-content-center">
		<ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
		  <li className="nav-item" role="presentation">
		    <button className="nav-link active" id="pills-starter-tab" data-bs-toggle="pill" data-bs-target="#pills-starter" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Starters</button>
		  </li>
		  <li className="nav-item" role="presentation">
		    <button className="nav-link" id="pills-breakfast-tab" data-bs-toggle="pill" data-bs-target="#pills-breakfast" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Breakfast</button>
		  </li>
		  <li className="nav-item" role="presentation">
		    <button className="nav-link" id="pills-lunch-tab" data-bs-toggle="pill" data-bs-target="#pills-lunch" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Lunch</button>
		  </li>
		  <li className="nav-item" role="presentation">
		    <button className="nav-link" id="pills-dinner-tab" data-bs-toggle="pill" data-bs-target="#pills-dinner" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dinner</button>
		  </li>
		</ul>
		</div>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-starter" role="tabpanel" aria-labelledby="pills-starter-tab">
  	<div className="row container-fluid">
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={chowmean} className="img-fluid menu-item on-hover-effect rounded-2 rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Chow mein</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={pizzaPaneer} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Paneer Pizza</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={chowmean} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Chow mein</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>
  		</div>
  	</div>
  	

  </div>

  <div className="tab-pane fade" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
  		<div className="row container-fluid">
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={coffee1} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Coffee </p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={roll} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Veg Roll </p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={coffee1} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Coffee </p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={roll} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Veg Roll</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>
  		</div>
  	</div>

  </div>
  <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
  		<div className="row container-fluid">
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={paneer} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Butter Paneer</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={paneer} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Butter Paneer</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={paneer} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Butter Paneer</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={paneer} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Butter Paneer</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>
  		</div>
  	</div>
  </div>
  <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
  		<div className="row container-fluid">
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={chowmean} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Chow mein</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={chowmean} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Chow mein</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={chowmean} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Chow mein</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>

  		</div>
  		<div className="col-lg-3 col-md-3 col-sm-12 col-12" data-aos="zoom-in-up">
  			<div className="inner">
  			<img src={chowmean} className="img-fluid menu-item on-hover-effect rounded-2"/>
		    </div>
		    <p className="my-2 menu-item-text">Chow mein</p>
		    <p className="font-weight-bold text-orange"><i class="fa-solid fa-indian-rupee-sign"></i>150</p>
  		</div>
  	</div>
  </div>
</div>
		</div>
		);
}
export default Menu