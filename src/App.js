import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./component/Home.jsx";
import Cloth from "./component/Details.jsx";
import Addcart from './component/Addcart';
import { useState } from 'react';
function App() {
  const [details,setdetail] = useState('');
  return (
    <div className="container">
      <div className="containerBox">
      <BrowserRouter>
       <Routes>
            <Route path='/' element={<Home setdetail={setdetail}/>}/>
            <Route path='/Details' element={<Cloth details={details}/>}/>
            <Route path='/Details/Addcart' element={<Addcart/>}/>
       </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
