import { Route, Routes } from 'react-router-dom';
import { NavBar } from './pages/Navbar';
import './styles/app.css';
import Home from './pages/Home';
import Roti from './pages/Roti';
import Tiffin from './pages/Tiffin';
import Catering from './pages/Catering';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/roti' element={<Roti/>} />
          <Route path='/tiffin' element={<Tiffin/>} />
          <Route path='/catering' element={<Catering/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      
    </div>
  );
}

export default App;