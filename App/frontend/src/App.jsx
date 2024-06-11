// import logo from './logo.svg';
import{Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/02-03/Counter';
import Effectone from './components/03-03/Effectone';
import EffectTwo from './components/03-03/EffectTwo';
import Wellcome from './components/03-03/Wellcome';
import EffectThree from './components/03-03/EffectThree';
import Effectfour from './components/03-03/Effectfour';
import Registerpage from './components/06-03/Registerpage';
import Test from './components/Test';
import UseReducer from './components/09-03/UseReducer';
import { Children, useState } from 'react';
import PropsDrilling from './components/09-03/PropsDrilling';
import ProviderCounterContext from './components/Context/ProviderCounterContext';
import FackAllProducts from './components/10-03/FackAllProducts';
import AuthContext from './components/Context/AuthContext';
import Todo from './components/15-03/Todo';
import Themes from './components/16-03/Themes';
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';
import CurrencyConverter from './components/CurrencyProject/CurrencyConverter';
import Them from './components/16-03/Them';
// import CounterRedux from './components/20-03/CounterRedux';
import UseMemo from './components/22-03/UseMemo';
import UseCallback from './components/23-03/UseCallBack';
import ChildComponentJsx from './components/23-03/ChildComponent.jsx';
// import ThemeRedux from './components/ThemeRedux.jsx';
import SpotifySearch from './components/RapidApiProjects/SpotifySearch.js';
import FakeStoreSingleProducts from './components/10-03/FakeStoreSingleProducts.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import AllProducts from './components/AllProducts.jsx';
import Seller from './components/project/Seller.jsx';
import Buyer from './components/project/Buyer.jsx';
import YourProducts from './components/project/YourProducts.jsx';
import Cart from './components/Cart.jsx';










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
     

    <Route path='/counter' element={<Counter/>} />
    <Route path='/Effect-1' element={<Effectone/>} />
    <Route path='/Effect-2' element={<EffectTwo/>} />
    <Route path='/Effect-3' element={<EffectThree/>} />
    <Route path='/Effect-4' element={<Effectfour/>} />
    <Route path='/Wellcome' element={<Wellcome/>} />
   {/* <Route path='/Registerpage' element={<Register/>} /> */}
    <Route path='/Test' element={<Test/>} />
    <Route path='/useReducer' element={<UseReducer/>} />
    <Route path='/Children' element={<Children/>} />
    <Route path='/PropsDrilling' element={<PropsDrilling  students={students} counter={counter}  age={age}/>}  />
    <Route path='/ProviderCounterContext' element={<ProviderCounterContext/>}  />
    <Route path='/All-Products' element={<FackAllProducts/>}  />
    <Route path='/StoreSingleProducts' element={<FakeStoreSingleProducts/>}  />
    <Route path='/Todo' element={<Todo/>}  />
    <Route path='/Themes' element={<Themes/>}  />
    <Route path='/Them' element={< Them/>}/>
    <Route path='/CurrencyConverter' element={<CurrencyConverter/>}/>
    {/* <Route path='/CounterRedux' element={<CounterRedux/>}/> */}
    <Route path='/UseMemo' element={<UseMemo/>}/>
    <Route path='/UseCallback' element={<UseCallback/>}/>
    <Route path='/ChildComponent' element={<ChildComponentJsx/>}/>
    {/* <Route path='/ThemeRedux' element={<ThemeRedux/>}/> */}
    <Route path='/SpotifySearch' element={<SpotifySearch/>}/>
              
   
    

  

  
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
    </Routes>
      
    </div>
  );
}

export default App;


