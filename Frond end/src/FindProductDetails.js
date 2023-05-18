import axios from "axios";
import { useState } from "react";


function FindProductDetails() {
    let [product,setProduct]=useState("");
    let [msgInfo,setMsgInfo]=useState("")
 let [result,setResult]=useState(false);
let [product_name,setProductName]=useState("");
async function searchProduct() {
    let result = await axios.get("http://localhost:3000/api/product/findProductsByPname/"+product_name)
    console.log(result)
    if(result.data.msg=="Record present"){
                setResult(true);
                setProduct(result.data.product)
    }else {
        setResult(false);
    }
    setMsgInfo(result.data.msg);
}
    return(
        <div>
            <h2>Search Product Details</h2>
            <label>Product Name</label>
            <input type="search" name="product_name" onChange={(event)=>setProductName(event.target.value)}/><br/>
            <input type="button" value="Search Product" onClick={searchProduct}/>
            <br/>
            {msgInfo}
            <br/>
            {result?"Product Name is " +product.product_name+ " Product Image is " +product.product_image+ " Product Price is " +product.product_price+ " Product Qty is " +product.product_qty:""}
        </div>
    )
}


export default FindProductDetails;