import './Modal.css'

const Modal = () => {
	return(
			<div>
          <div className="modal fade" loading="lazy" id="offer-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-opacity">
                <div className="modal-header text-light">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                  <a href="tel:9634142017" className="text-center order-btn"><button type="button" className="btn btn-maroon">Order Now</button></a>
              </div>
            </div>
          </div>
			</div>
		);
}
export default Modal