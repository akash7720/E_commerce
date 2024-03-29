// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import NoPageFound from './Components/NoPageFound';
import Navbar from './Components/Navbar';
import AddCart from './Components/AddCart';
import UserDetiles from './Components/UserDetiles';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
         <Route path='*' element={<NoPageFound/>}/>
           <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/AddCart' element={<AddCart/>}/>
          <Route path='/UserDetiles' element={<UserDetiles/>}/>
          
      </Routes>
     
    </div>
  );
}

export default App;
