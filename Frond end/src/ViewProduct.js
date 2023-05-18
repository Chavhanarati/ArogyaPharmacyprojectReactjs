import axios from "axios";
import { useState } from "react";

function ViewProduct() {
let [product,setProduct]=useState([]);

// async function loadEmployeeData() {
//     try{
//     let result = await axios.get("http://localhost:3000/api/employees/getEmployee");
//     console.log(result.data);
//     setEmployees(result.data);
//     }catch(ex){
//         console.log(ex);
//     }
// }
//     let empRec = employees.map(e=><li key={e._id}>Id is {e._id} Name is {e.name} age is {e.age} salary is {e.salary} city is {e.city}</li>)
//     return(
//         <div>
//             <h2>Employee details are</h2>
//             <input type="button" value="Load Data" onClick={loadEmployeeData}/>
//             <hr/>
//             <ol>
//             {empRec}
//             </ol>           
//         </div>
//     )
// }

async function loadProductData() {
    try{
    let result = await axios.get("http://localhost:3000/api/product/findAllProducts");
    console.log(result.data);
    setProduct(result.data);
    }catch(ex){
        console.log(ex);
    }
}
    let prodRow = product.map(e=><tr key={e._id}><td>{e.product_name}</td><td><img src={e.product_image} width="200px" height="200px"/></td><td>{e.product_price}</td><td>{e.product_qty}</td></tr>)
    return(
        <div>
            <h2>Product details are</h2>
            <input type="button" value="Load Data" onClick={loadProductData}/>
            <hr/>
            <table border="1">
                <thead>
                <tr>
                    <th>product Name</th>
                    <th>Product Image</th>
                    <th>product price</th>
                    <th>product qty</th>
                </tr>
                </thead>
                <tbody>
                    {prodRow}
                </tbody>
            </table>              
        </div>
    )
}


export default ViewProduct;