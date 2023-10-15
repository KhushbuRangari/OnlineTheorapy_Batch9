
import './App.css';
import Medicines from './Components/pages/Medicines/Medicines';

import Banner from './components/pages/Banner';
import Services from './components/pages/Services';
import SecurityInfo from './components/pages/SecurityInfo';
import Info from './components/pages/Info';
import Layouts from './components/layouts/Layouts';
function App() {
  return (

    <>
     <Layouts/>
     <Medicines />
    <Banner />
    <Services />
    <SecurityInfo />
    <Info />
    </>

  );
}

export default App;
