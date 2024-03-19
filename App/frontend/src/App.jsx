// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import NoPageFound from './Components/NoPageFound';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
         <Route path='*' element={<NoPageFound/>}/>
           <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>

          
      </Routes>
     
    </div>
  );
}

export default App;
