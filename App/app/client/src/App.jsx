
import{Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import Registerpage from './components/06-03/Registerpage';

import UseReducer from './components/09-03/UseReducer';
import { Children, useState } from 'react';
import PropsDrilling from './components/09-03/PropsDrilling';
import ProviderCounterContext from './components/Context/ProviderCounterContext';

import AuthContext from './components/Context/AuthContext';

import Themes from './components/16-03/Themes';
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';

import Them from './components/16-03/Them';
import CounterRedux from './components/20-03/CounterRedux';
import UseMemo from './components/22-03/UseMemo';
import UseCallback from './components/23-03/UseCallBack';
import ChildComponentJsx from './components/23-03/ChildComponent.jsx';
import ThemeRedux from './components/ThemeRedux.jsx';

import AddProduct from './components/AddProduct/AddProduct.jsx';
import AllProducts from './components/AllProducts.jsx';
import Seller from './components/project/Seller.jsx';
import Buyer from './components/project/Buyer.jsx';
import YourProducts from './components/project/YourProducts.jsx';
import Cart from './components/Cart.jsx';
import ProductDetiles from './components/ProductDetiles.jsx';










function App() {
  const [students] = useState(["a", 'b', 'c', 'd'])
  const [counter] = useState(1234)
  const[age]=useState(65)

  const [products, ] = useState([
    {
      name: "Tshirt",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Jeans",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: " cap",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Tshirt",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Jeans",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: " cap",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Tshirt",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: "Jeans",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
    {
      name: " cap",
      image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg",
    },
  ]);
  

  return (
   
    <div className="App">
       <Navbar/>
       
    <Routes>
    <Route path='/useReducer' element={<UseReducer/>} />
    <Route path='/Children' element={<Children/>} />
    <Route path='/PropsDrilling' element={<PropsDrilling  students={students} counter={counter}  age={age}/>}  />
    <Route path='/ProviderCounterContext' element={<ProviderCounterContext/>}  />
    <Route path='/Themes' element={<Themes/>}  />
    <Route path='/Them' element={< Them/>}/>
    <Route path='/CounterRedux' element={<CounterRedux/>}/>
    <Route path='/UseMemo' element={<UseMemo/>}/>
    <Route path='/UseCallback' element={<UseCallback/>}/>
    <Route path='/ChildComponent' element={<ChildComponentJsx/>}/>
    <Route path='/ThemeRedux' element={<ThemeRedux/>}/>
    
              
   
    

  

  
    <Route path='*' element={<NoPage/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/Register' element={<Registerpage/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/AuthContext' element={<AuthContext/>}  />
    <Route path='/AllProducts' element={<AllProducts awdiz={products }/>}/>
    <Route path='/add-product' element={<AddProduct/>}/>   
    <Route path='/seller' element={<Seller/>}/>  
    <Route path='/buyer' element={<Buyer/>}/>  
    <Route path='/Your-Products' element={<YourProducts/>}/> 
    <Route path='/Add-To-Cart' element={<Cart/>}/> 
    <Route path='/ProductDetiles' element={<ProductDetiles/>}/> 

    </Routes>
      
    </div>
  );
}

export default App;


