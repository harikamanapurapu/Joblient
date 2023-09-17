
import './App.css';
import Advance from './Components/Advance/Advance';
import Competitive from './Components/Competitive/Competitive';
import Footer from './Components/Footer/Footer';
import Interview from './Components/Interview/Interview';
import Platform from './Components/Platfrom/Platform';
import Smart from './Components/Smart/Smart';
import System from './Components/System/System';

function App() {
  return (
    <div className="App">
      <div className='first-row'>
        <Platform />
        <System />
      </div >
      <div className='second-row'>
        <Smart />
        <Competitive />
        <Interview />
      </div>
      <div className='third-row'>       
        <Advance/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
