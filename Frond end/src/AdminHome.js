import { Link, Route, Routes } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import ViewCustomer from "./ViewCustomer";
import FindCustomerDetails from "./FindCustomerDetails";
import AddOrder from "./AddOrder";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import ViewOrder from "./ViewOrder";
import AddProductCategory from "./AddProductCategory";
import ViewProductCategory from "./ViewProductCategory";
import FindOrderDetails from "./FindOrderDetails";
import FindProductCategoryDetails from "./FindProductCategoryDetails";
import FindProductDetails from "./FindProductDetails";


function AdminHome() {



    return(
        <div className="container-fluid admin-container">

            <h2>Welcome to Admin Home Page</h2>
            <div className="AdminHome">

                <u1>
                     <li><Link to="/adminHome/addCustomer" style={{backgroundColor:"lightpink",color:"black",border:"solid gray",  borderWidth:"2px"}}>Add Customer</Link></li> <br/>
                     <li><Link to="/adminHome/AddOrder" style={{backgroundColor:"lightpink",color:"black",border:"solid gray",  borderWidth:"2px"}}> Add Order</Link></li><br/> 
                     <li><Link to="/adminHome/AddProduct" style={{backgroundColor:"lightpink",color:"black",border:"solid gray",  borderWidth:"2px"}}> Add Product</Link></li><br/> 
                     <li><Link to="/adminHome/AddProductCategory" style={{backgroundColor:"lightpink",color:"black",border:"solid gray",  borderWidth:"2px"}}>AddProductCategory</Link></li><br/>
                     <li><Link to="/adminHome/viewCustomer" style={{backgroundColor:"purple",color:"white",border:"solid gray",  borderWidth:"3px"}}>View Customer</Link></li><br/> 
                     <li><Link to="/adminHome/viewProduct" style={{backgroundColor:"purple",color:"white",border:"solid gray",  borderWidth:"3px"}}><span>View Product</span></Link> </li><br/>
                     <li><Link to="/adminHome/viewOrder" style={{backgroundColor:"purple",color:"white",border:"solid gray",  borderWidth:"3px"}}>View Order</Link></li><br/>
                     <li><Link to="/adminHome/viewProductCategory" style={{backgroundColor:"purple",color:"white",border:"solid gray",  borderWidth:"3px"}}> View ProductCategory</Link></li><br/> 
                     <li><Link to="/adminHome/FindOrderDetails" style={{backgroundColor:"Green",color:"white",border:"solid gray",  borderWidth:"3px"}}>Find Order Details</Link></li><br/> 
                     <li><Link to="/adminHome/FindProductCategoryDetails" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}> Find ProductCategory Details</Link></li><br/>
                     <li><Link to="/adminHome/FindProductDetails" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>Find Product Details</Link></li><br/> 
                    <li> <Link to="/adminHome/FindCustomerDetails" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>Find Customer Details</Link></li><br/>

                </u1>

    <hr/>
    </div>

        </div>
    )
}


export default AdminHome;