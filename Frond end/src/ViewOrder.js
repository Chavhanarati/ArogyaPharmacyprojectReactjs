import axios from "axios";
import { useState } from "react";

function ViewOrder() {
let [order,setOrder]=useState([]);


async function loadOrderData() {
    try{
    let result = await axios.get("http://localhost:3000/api/order/findAllOrder");
    console.log(result.data);
    setOrder(result.data);
    }catch(ex){
        console.log(ex);
    }
}
    let ordRow = order.map(e=><tr key={e._id}><td>{e.customer_id}</td><td>{e.category_id}</td><td>{e.product_id}</td><td>{e.product_qty}</td><td>{e.amount}</td><td>{e.order_date}</td><td>{e.delivery_date}</td><td>{e.delivery_time}</td></tr>)
    return(
        <div>
            <h2>Product details are</h2>
            <input type="button" value="Load Data" onClick={loadOrderData}/>
            <hr/>
            <table border="1">
                <thead>
                <tr>
                    <th>Customer Id</th>
                    <th>Category Id</th>
                    <th>Product Id</th>
                    <th>Product qty</th>
                    <th>Amount</th>
                    <th>Order Date</th>
                    <th>Delivery Date</th>
                    <th>Delivery Time</th>

                </tr>
                </thead>
                <tbody>
                    {ordRow}
                </tbody>
            </table>              
        </div>
    )
}


export default ViewOrder;