import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import {Routes,Route} from "react-router-dom"
import Product from './Components/Products/Product';
import ProductDetails from './Components/Products/ProductDetails';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/products' element ={<Products></Products>}></Route>
        <Route path='/products/:productId' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
