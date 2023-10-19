import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import OurClient from './Components/OurClient';
import Services from './Components/Services';
import MeetCaptain from './Components/MeetCaptain';
import Footerbanner from './Components/Footerbanner';

function App() {
  return (
   <>
   <Hero/>
   <OurClient />

   <Services />

   <MeetCaptain/>

   <Footerbanner/>
   </>
  );
}

export default App;
