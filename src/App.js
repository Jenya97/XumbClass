import logo from './logo.svg';
import './App.css';
import City from './City';
import Gyumri from './99.jpg';
import {ReactComponent as ReactLogo} from './logo.svg'

function App() {
  return (
    <div className="App">
   <City name='Gyumri' src={Gyumri}/>
   <City name='Erevan' src={logo}/>
   <City name='Hoktemberyan'  src='img/hh.jpg'/>
   <City name='Vanadzor'  src='img/hh.jpg'/>
   <ReactLogo/>
    </div>
  );
}

export default App;
