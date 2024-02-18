import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-900'>
        <Navbar></Navbar>
      </div>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    </div>
  );
}

export default App;
