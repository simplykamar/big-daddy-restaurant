import pizza from '../../img/restro/pizza.jpg'
import food from '../../img/menu-item/food.jpg';
import coffee1 from '../../img/menu-item/coffee1.jpg';
import coffee2 from '../../img/menu-item/coffee2.jpg';

import './SpecialDish.css'
const SpecialDish = () => {
	return(
			<div className="container-fluid">
			<h2 className="text-center">SPECIAL DISHES</h2>
				<div className="row my-5 text-center">
	              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
	                <div className="card shadow " data-aos="zoom-in-up">
				 	 <div className="inner">
				 	 	<img src={pizza} className="card-img-top on-hover-effect" alt="..."/>
					 </div>
					  <div className="card-body">
					    <h4 className="card-title text-orange">Delux Paneer pizza</h4>
					    <p className="card-text">
					    You should try Deluxe Veggie pizza from Big Daddy. Loaded with delectable mushrooms, golden corn, paneer, capsicum, and onions, this pizza guarantees an explosion of flavors in every bite.

					    </p>
					  </div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
	                <div className="card shadow " data-aos="zoom-in-up">
				 	 <div className="inner">
				 	 	<img src={food} className="card-img-top on-hover-effect" alt="..."/>
					 </div>
					  <div className="card-body">
					    <h4 className="card-title text-danger">Big Daddy Special</h4>
					    <p className="card-text">Big Daddy Big Daddy Big Daddy
					    Big Daddy Big Daddy Big DaddyBig Daddy Big Daddy Big Daddy
					    </p>
					  </div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0">
	                <div className="card shadow " data-aos="zoom-in-up">
				 	 <div className="inner">
				 	 	<img src={coffee2} className="card-img-top on-hover-effect" alt="..."/>
					 </div>
					  <div className="card-body">
					    <h4 className="card-title text-danger">Special Coffee</h4>
					    <p className="card-text">Big Daddy Big Daddy Big Daddy
					    Big Daddy Big Daddy Big DaddyBig Daddy Big Daddy Big Daddy
					    </p>
					  </div>
					</div>
				</div>  
			</div>
		</div>
		);
}
export default SpecialDish;