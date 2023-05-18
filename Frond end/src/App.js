import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Login from './Login';
import AdminHome from './AdminHome';
import CustomerHome from './CustomerHome';
import AddCustomer from './AddCustomer';
import ViewCustomer from './ViewCustomer';
import FindCustomerDetails from './FindCustomerDetails';
import AddOrder from './AddOrder';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import ViewOrder from './ViewOrder';
import AddProductCategory from './AddProductCategory';
import ViewProductCategory from './ViewProductCategory';
import FindOrderDetails from './FindOrderDetails';
import FindProductCategoryDetails from './FindProductCategoryDetails';
import FindProductDetails from './FindProductDetails';

function App() {
  return (
    <div className="App">
    <h2 className='myClass'>Arogya Pharmacy</h2> 
    <Link to="/aboutus">About Us</Link> |
    <Link to="/contactus">Contact Us</Link> |
    <Link to="/feedback">Feedback</Link> |
    <Link to="/login">Login</Link>

    <Routes>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      <Route path='/adminHome/addCustomer' element={<AddCustomer/>}></Route>
      <Route path='/adminHome/viewCustomer' element={<ViewCustomer/>}></Route>
      <Route path='/adminHome/FindCustomerDetails' element={<FindCustomerDetails/>}></Route>
      <Route path='/adminHome/addOrder' element={<AddOrder/>}></Route>
      <Route path='/adminHome/addProduct' element={<AddProduct/>}></Route>
      <Route path='/adminHome/viewProduct' element={<ViewProduct/>}></Route>
      <Route path='/adminHome/viewOrder' element={<ViewOrder/>}></Route>
      <Route path='/adminHome/addProductCategory' element={<AddProductCategory/>}></Route>
      <Route path='/adminHome/viewProductCategory' element={<ViewProductCategory/>}></Route>
      <Route path='/adminHome/FindOrderDetails' element={<FindOrderDetails/>}></Route>
      <Route path='/adminHome/FindProductCategoryDetails' element={<FindProductCategoryDetails/>}></Route>
      <Route path='/adminHome/FindProductDetails' element={<FindProductDetails/>}></Route>
      <Route path='/Customerhome' element={<CustomerHome/>}></Route>
      <Route path='/CustomerHome/viewProduct' element={<ViewProduct/>}></Route> |
      <Route path='/CustomerHome/viewOrder' element={<ViewOrder/>}></Route> |
      <Route path='CustomerHome/viewProductCategory' element={<ViewProductCategory/>}></Route> |
      <Route path='/CustomerHome/FindOrderDetails' element={<FindOrderDetails/>}></Route> |
      <Route path='/CustomerHome/FindProductCategoryDetails' element={<FindProductCategoryDetails/>}></Route> |
      <Route path='/CustomerHome/FindProductDetails' element={<FindProductDetails/>}></Route> |



    </Routes>
    </div>
  );
}

export default App;