import axios from "axios";
import { useState } from "react";


function FindOrderDetails() {
    let [order,setOrder]=useState("");
    let [msgInfo,setMsgInfo]=useState("")
 let [result,setResult]=useState(false);
let [customer_id,setCustomerId]=useState(0);
async function searchOrder() {
    let result = await axios.get("http://localhost:3000/api/order/findOrderByCustomerId/"+customer_id)
    console.log(result)
    if(result.data.msg=="Record present"){
                setResult(true);
                setOrder(result.data.order)
    }else {
        setResult(false);
    }
    setMsgInfo(result.data.msg);
}
    return(
        <div>
            <h2>Search Order Details</h2>
            <label>Customer Id</label>
            <input type="search" name="customer_id" onChange={(event)=>setCustomerId(event.target.value)}/><br/>
            <input type="button" value="Search Order" onClick={searchOrder}/>
            <br/>
            {msgInfo}
            <br/>
            {result?"Order Customer Id is " +order.customer_id+ " Category id is " +order.category_id+ " Product id is " +order.product_id+ " Product Qty is " +order.product_qty+ " Amount is " +order.amount+" Order Date is " +order.order_date+ " Delivery Date is " +order.delivery_date+ " Delivery Time is " +order.delivery_time:""}
        </div>
    )
}


export default FindOrderDetails;