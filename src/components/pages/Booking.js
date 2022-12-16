import './Booking.css'
const Booking = () =>{
  return(
        <div className="container-fluid my-5 text-center" id="booking-section">
        <h2 className="mb-5">BOOK A TABLE<hr/></h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="flip-left">
              <div className="booking-section-img p-3 text-light shadow rounded">
                <h2>Reservation Your Seats to Confirm if You Came with Your Friends</h2>
                <h4 className="mt-5">Organize Your <span className="text-warning">Events</span> in our Restaurant</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 mt-sm-0 mt-lg-0 mt-md-0" data-aos="flip-right">
              <form>
              <div class="form-floating mb-3 mt-3">
                <input type="text" required="true" placeholder="enter your name" className="form-control"/>
                <label for="name">Your Name</label>
              </div>
            <div class="form-floating mb-3 mt-3">
              <input type="number" required="true" placeholder="your phone number" className="form-control"/>
              <label for="number">Your Phone Number</label>
            </div>
            <div class="form-floating">
              <select class="form-select" name="members">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
              </select>
              <label for="members" class="form-label">Select number Of member</label>
            </div>
              <div class="form-floating mb-3 mt-3">
                <input className="form-control" placeholder="dd/mm/yyyy" required="true" placeholder="dd/mm/yyyy"  type="date"/>
                <label for="date">Date</label>
              </div>
              <button className="btn btn-success btn-lg px-5">Confirm Book -></button>
              </form>
            </div>
          </div>


        </div>
    );
}
export default Booking;