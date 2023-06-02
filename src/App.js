// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DashBoard from './Pages/DashBoard';
import Category from './Components/Category';
import Product from './Components/Product';
import Insert from './Components/InsertP';
import UpdateCat from './Components/UpdateCat';
import Review from './Components/Review';
import Addreview from './Components/Addreview';
import Users from './Components/Users';
import Adduser from './Components/Adduser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        
        <Route path='dashboard' element={<DashBoard/>}></Route>
        <Route path='dashboard/category' element={<Category/>}></Route>
        <Route path='dashboard/product' element={<Product/>}></Route>
        <Route path='dashboard/users' element={<Users/>}></Route>
        <Route path='dashboard/review' element={<Review/>}></Route>
        <Route path='dashboard/addproduct' element={<Insert/>}></Route>
        <Route path='dashboard/update/:id' element={<UpdateCat/>}></Route>
        <Route path='dashboard/Addreview' element={<Addreview/>}></Route>
        <Route path='dashboard/Adduser' element={<Adduser/>}></Route>
       

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
