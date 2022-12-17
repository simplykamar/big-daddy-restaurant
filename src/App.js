import './App.css';

import Header from './components/pages/Header'
import About from './components/pages/About'
import SpecialDish from './components/pages/SpecialDish'
import ExpertChef from './components/pages/ExpertChef'
import Testimony from './components/pages/Testimony'
import Booking from './components/pages/Booking'
import Section1 from './components/pages/Section1'
import Section2 from './components/pages/Section2'
import Menu from './components/pages/Menu'
import Footer from './components/pages/Footer'
import Modal from './components/Modal'


function App() {
  return (
    <div className="App">
      <Header/>
      <Modal/>
      <About/>

      <SpecialDish/>
      <ExpertChef/>
      <Testimony/>
      <Booking/>
      <Section2/>
      <Menu/>
      <Section1/>
      <Footer/>


    </div>
  );
}

export default App;
//https://preview.colorlib.com/#tasty