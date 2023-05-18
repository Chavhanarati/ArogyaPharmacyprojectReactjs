import { useState } from "react";
import axios from "axios";
function AddOrder() {

let [_ecustomerid,setCustomerId]=useState(0);
let [_ecategoryid,setCategoryId]=useState(0);
let [_eproductid,setProductId]=useState(0);
let [_eproductqty,setProductqty]=useState(0);
let [eamount,setAmount]=useState("");
let [_eorderdate,setOrderDate]=useState("");
let [_edeliverydate,setDeliveryDate]=useState("");
let [_edeliverytime,setDeliveryTime]=useState("");
let [msgInfo,setMessage]=useState("");


async function storeOrdeInfo(event) {
    event.preventDefault();
   let order = {customer_id:_ecustomerid,category_id:_ecategoryid,product_id:_eproductid,product_qty:_eproductqty,amount:eamount,order_date:_eorderdate,delivery_date:_edeliverydate,delivery_time:_edeliverytime}
   console.log(order)
   let result = await axios.post("http://localhost:3000/api/order/storeOrderInfo",order);
   setMessage(result.data.msg);
}
    return(
        <div>
        <span>{msgInfo}</span>
            <hr/>
            <form onSubmit={storeOrdeInfo}>
            <label>Customer Id</label>
            <input type="number" name="_ecustomerid" onChange={(event)=>setCustomerId(event.target.value)}/>
            <br/>
            <label> Category Id</label>
            <input type="number" name="_ecategoryid" onChange={(event)=>setCategoryId(event.target.value)}/>
            <br/>
            <label>Product Id</label>
            <input type="number" name="_eproductid" onChange={(event)=>setProductId(event.target.value)}/>
            <br/>
            <label>Product qty</label>
            <input type="number" name="_eproductqty" onChange={(event)=>setProductqty(event.target.value)}/>
            <br/>
            <label>Amount</label>
            <input type="text" name="eamount" onChange={(event)=>setAmount(event.target.value)}/>
            <br/>
            <label>Order Date</label>
            <input type="text" name="_eorderdate" onChange={(event)=>setOrderDate(event.target.value)}/>
            <br/>
            <label>Delivery Date</label>
            <input type="text" name="_edeliverydate" onChange={(event)=>setDeliveryDate(event.target.value)}/>
            <br/>
            <label>Delivery Time</label>
            <input type="text" name="_edeliverytime" onChange={(event)=>setDeliveryTime(event.target.value)}/>

            <br/>
            <input type="submit" value="store order"/>
            <input type="reset" value="reset"/>    
        </form>   
        </div>
    )
}


export default AddOrder;