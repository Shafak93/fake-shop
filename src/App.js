import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import {Routes,Route} from "react-router-dom"
import Product from './Components/Products/Product';

function App() {
  return (
    <div className="App container">
      <Products></Products>
      
      <Routes>
        <Route path='/product/id' element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
