import './Section2.css'
const Section2 = () =>{
  return(
        <div className="parallel-effect py-5 text-center">
          <div className=" p-5 parallel-effect-content">
            <h3 data-aos="flip-right">We belive good food offer great smile :)</h3><br/>
              <div className="line-height">
                <p className="good-text text-warning" data-aos="flip-right">Good</p>
                <p className="food-text" data-aos="flip-up">Food</p>
                <p className="is-text" data-aos="flip-right">is</p>
                <p className="good-text text-warning" data-aos="flip-left">Good</p>
                <p className="food-text" data-aos="flip-down">Mood</p>
              </div>
          </div>
        </div>
    );
}
export default Section2;