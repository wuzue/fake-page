import './App.css';
import FifthSec from './components/FifthSec';
import FirstSec from './components/FirstSec';
import Footer from './components/Footer';
import FourthSec from './components/FourthSec';
import SecondSec from './components/SecondSec';
import SixthSec from './components/SixthSec';
import ThirdSec from './components/ThirdSec';

function App() {
  return (
    <div className="App">
      <FirstSec/>
      <SecondSec/>
      <ThirdSec/>
      <FourthSec/>
      <FifthSec/>
      <SixthSec/>
      <Footer/>
    </div>
  );
}

export default App;
