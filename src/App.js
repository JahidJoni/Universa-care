import './App.css';
import Accreditation from './Components/Accreditation/Accreditation';
import Alert from './Components/Alert/Alert';
import Appointment from './Components/Appointment/Appointment';
import Cares from './Components/Cares/Cares';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Reviews from './Components/Reviews/Reviews';
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
     <Accreditation></Accreditation>
     <Reviews></Reviews>
     <Appointment></Appointment>
     <Footer></Footer>
    </div>
  );
}

export default App;
