import axios from "axios";
import { useState } from "react";

function ViewProductCategory() {
let [productcategory,setProductCategoey]=useState([]);


async function loadProductcategoryData() {
    try{
    let result = await axios.get("http://localhost:3000/api/productCategory/findAllProductCategory");
    console.log(result.data);
    setProductCategoey(result.data);
    }catch(ex){
        console.log(ex);
    }
}
    let pcatRow = productcategory.map(e=><tr key={e._id}><td>{e.disease_name}</td><td><img src={e.image} width="200px" height="200px"  /></td>></tr>)
    return(
        <div>
            <h2>Product Category details are</h2>
            <input type="button" value="Load Data" onClick={loadProductcategoryData}/>
            <hr/>
            <table border="1">
                <thead>
                <tr>
                    <th>Disease Name</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                    {pcatRow}
                </tbody>
            </table>              
        </div>
    )
}


export default ViewProductCategory;