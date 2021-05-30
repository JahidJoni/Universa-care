import './App.css';
import Alert from './Components/Alert/Alert';
import Cares from './Components/Cares/Cares';
import NavBar from './Components/NavBar/NavBar';
import ServiceFlow from './Components/ServiceFlow/ServiceFlow';
import TopBanner from './Components/TopBanner/TopBanner';

function App() {
  return (
    <div>
     <Alert></Alert>
     <NavBar></NavBar>
     <TopBanner></TopBanner>
     <Cares></Cares>
     <ServiceFlow></ServiceFlow>
    </div>
  );
}

export default App;
