import { useState } from "react";
import axios from "axios";
function AddProductCategory() {

let [_edisease,setDisease]=useState("");
let [_eimage,setImage]=useState("");
let [msgInfo,setMessage]=useState("");


async function storeProductCategoryInfo(event) {
    event.preventDefault();
   let productcategory = {disease_name:_edisease,image:_eimage}
   console.log(productcategory)
   let result = await axios.post("http://localhost:3000/api/productCategory/storeProductCategoryInfo",productcategory);
   setMessage(result.data.msg);
}
    return(
        <div>
        <span>{msgInfo}</span>
            <hr/>
            <form onSubmit={storeProductCategoryInfo}>
            <label>Disease Name</label>
            <input type="text" name="_edisease" onChange={(event)=>setDisease(event.target.value)}/>
            <br/>
            <label>Image</label>
            <input type="url" image="_eimage" onChange={(event)=>setImage(event.target.value)}/>
            <br/>
            <input type="submit" value="store productcategory"/>
            <input type="reset" value="reset"/>    
        </form>   
        </div>
    )
}


export default AddProductCategory;