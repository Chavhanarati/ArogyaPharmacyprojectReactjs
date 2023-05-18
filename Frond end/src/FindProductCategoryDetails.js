import axios from "axios";
import { useState } from "react";


function FindProductCategoryDetails() {
    let [productcategory,setProductcategory]=useState("");
    let [msgInfo,setMsgInfo]=useState("")
 let [result,setResult]=useState(false);
let [disease_name,setDiseaseName]=useState("");
async function searchProductcategory() {
    let result = await axios.get("http://localhost:3000/api/productCategory/findProductCategoryBydisease/"+disease_name)
    console.log(result)
    if(result.data.msg=="Record present"){
                setResult(true);
                setProductcategory(result.data.productcategory)
    }else {
        setResult(false);
    }
    setMsgInfo(result.data.msg);
}
    return(
        <div>
            <h2>Search ProductCategory Name</h2>
            <label>Disease Name</label>
            <input type="search" name="disease_name" onChange={(event)=>setDiseaseName(event.target.value)}/><br/>
            <input type="button" value="Search Productcategory" onClick={searchProductcategory}/>
            <br/>
            {msgInfo}
            <br/>
            {result?" ProductCategory Disease Name is "+productcategory.disease_name+" Image is " +productcategory.image:""}
        </div>
    )
}






export default FindProductCategoryDetails;