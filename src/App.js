import logo from './logo.svg';
import './App.css';
import Api from './Api';
import Banner from './Banner';
import Navbars from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Banner />
        <div className='row row-cols-lg-3 mt-5'>
        <Api />
        </div>
     
    </div>
  );
}

export default App; 