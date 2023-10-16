
import './App.css';
import Medicines from './components/pages/Medicines/Medicines.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import FindDoctor from './components/pages/FindDoctor';
import Header from './components/layouts/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/finddoctor' element={<FindDoctor />}></Route>
          <Route path='/medicines' element={<Medicines />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
