import axios from "axios";
import { useState } from "react";

function ViewCustomer() {
let [customer,setCustomer]=useState([]);

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

async function loadCustomerData() {
    try{
    let result = await axios.get("http://localhost:3000/api/customer/findAllCustomers");
    console.log(result.data);
    setCustomer(result.data);
    }catch(ex){
        console.log(ex);
    }
}
    let custRow = customer.map(e=><tr key={e._id}><td>{e.first_name}</td><td>{e.last_name}</td><td>{e.age}</td><td>{e.mobile_no}</td><td>{e.gender}</td><td>{e.address}</td></tr>)
    return(
        <div>
            <h2>Customer details are</h2>
            <input type="button"  value="Load Data" onClick={loadCustomerData}/>
            <hr/>
            <table border="1">
                <thead>
                <tr>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>age</th>
                    <th>mobile_no</th>
                    <th>gender</th>
                    <th>address</th>
                </tr>
                </thead>
                <tbody>
                    {custRow}
                </tbody>
            </table>              
        </div>
    )
}


export default ViewCustomer;