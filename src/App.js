
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './screens/Login';
 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';

function App() {
  return (
   <CartProvider>

    < Router>
      <div> 
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/myOrder' element={<MyOrder/>} />
          
        </Routes>
      </div>
    </Router>
   </CartProvider>

   
  );
}

export default App;  
