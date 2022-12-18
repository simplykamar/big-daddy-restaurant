import './App.css';
import {Suspense, lazy} from 'react';
import Main from './components/Main'
// const Main = lazy(()=>import('./components/Main'));


function App() {
  return (
    <div className="App">
      
      <Main/>
    </div>
  );
}

export default App;
//https://preview.colorlib.com/#tasty