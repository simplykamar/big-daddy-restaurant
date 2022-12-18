import Header from './pages/Header'
import About from './pages/About'
import SpecialDish from './pages/SpecialDish'
import ExpertChef from './pages/ExpertChef'
import Testimony from './pages/Testimony'
import Booking from './pages/Booking'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Menu from './pages/Menu'
import Footer from './pages/Footer'
import Modal from './Modal'
import Gallery from './pages/Gallery'


function Main() {
  return (
    <div className="App">
      <Header/>
      <Modal/>
      <About/>
      <SpecialDish/>
      <ExpertChef/>
      <Testimony/>
      <Section2/>
      <Menu/>
      <Gallery/>
      <Booking/>
      <Section1/>
      <Footer/>
    </div>
  );
}

export default Main;