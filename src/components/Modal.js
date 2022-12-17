import offer from '../img/restro/offer.png'
import './Modal.css'

const Modal = () => {
	return(
			<div>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#offer-modal">
  Launch static backdrop modal
</button>

<div className="modal fade" id="offer-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content bg-opacity">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <a href="tel:9634142017"><button type="button" className="btn btn-orange">Order</button></a>
      </div>
    </div>
  </div>
</div>
			</div>
		);
}
export default Modal