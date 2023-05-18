import { useState } from "react";
import axios from "axios";
function AddProduct() {

let [_eproductname,setProductName]=useState("");
let [_eproductimage,setProductImage]=useState("");
let [_eproductprice,setProductPrice]=useState("");
let [_eproductqty,setProductqty]=useState(0);
let [msgInfo,setMessage]=useState("");


async function storeProductInfo(event) {
    event.preventDefault();
   let product = {product_name:_eproductname,product_image:_eproductimage,product_price:_eproductprice,product_qty:_eproductqty}
   console.log(product)
   let result = await axios.post("http://localhost:3000/api/product/storeProductInfo",product);
   setMessage(result.data.msg);
}
    return(
        <div>
        <span>{msgInfo}</span>
            <hr/>
            <form onSubmit={storeProductInfo}>
            <label>Product Name</label>
            <input type="text" name="_eproductname" onChange={(event)=>setProductName(event.target.value)}/>
            <br/>
            <label>Product Image</label>
            <input type="url" image="_eproductimage" onChange={(event)=>setProductImage(event.target.value)}/>
            <br/>
            <label>Product Price</label>
            <input type="text" name="_eproductprice" onChange={(event)=>setProductPrice(event.target.value)}/>
            <br/>
            <label>Product qty</label>
            <input type="number" name="_eproductqty" onChange={(event)=>setProductqty(event.target.value)}/>
            <br/>
            <input type="submit" value="store product"/>
            <input type="reset" value="reset"/>    
        </form>   
        </div>
    )
}


export default AddProduct;