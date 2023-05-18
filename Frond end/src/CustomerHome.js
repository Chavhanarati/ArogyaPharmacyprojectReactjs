import { Link, Route, Routes } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import ViewOrder from "./ViewOrder";
import ViewProductCategory from "./ViewProductCategory";
import FindOrderDetails from "./FindOrderDetails";
import FindProductCategoryDetails from "./FindProductCategoryDetails";
import FindProductDetails from "./FindProductDetails";




function CustomerHome() {
    return(
        <div>
            <h2>Welcome to Customer Home Page</h2>
            <div className="CustomerHome">
                <ul>
                  <li><Link to="/CustomerHome/viewProduct" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>view product</Link></li><br/>
                  <li><Link to="/CustomerHome/viewOrder" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>view Order</Link></li><br/>
                  <li><Link to="/customerHome/viewProductCategory" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}> View ProductCategory</Link></li><br/> 
                  <li> <Link to="/customerHome/FindOrderDetails" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>Find Order Details</Link></li> <br/>
                  <li><Link to="/customerHome/FindProductCategoryDetails" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>Find ProductCategory Details</Link></li> <br/>
                  <li><Link to="/customerHome/FindProductDetails" style={{backgroundColor:"green",color:"white",border:"solid gray",  borderWidth:"3px"}}>Find Product Details</Link></li><br/> 
                </ul>
    <hr/>
    </div>

        </div>
    )
}


  
export default CustomerHome;