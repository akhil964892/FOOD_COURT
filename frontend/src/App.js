
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import banner1 from './Components/Assets/banner1.png'
import banner2 from './Components/Assets/banner2.png'
import banner3 from'./Components/Assets/banner3.png'
import banner4 from './Components/Assets/banner4.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Shop/>}/>
        <Route path='/FC01' element ={<ShopCategory banner={banner1} category="FC01"/>}/>
        <Route path='/FC02' element ={<ShopCategory banner={banner2} category="FC02"/>}/>
        <Route path='/FC03' element ={<ShopCategory banner={banner3} category="FC03"/>}/>
        <Route path='/FC04' element ={<ShopCategory banner={banner4} category="FC04"/>}/>
        <Route path="/product" element ={<Product/>}>
        <Route path=':productId' element ={<Product/>}/>
        </Route>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/login' element ={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
