import axios from "axios";
import { useState } from "react";


function FindCustomerDetails() {
    let [customer,setCustomer]=useState("");
    let [msgInfo,setMsgInfo]=useState("")
 let [result,setResult]=useState(false);
let [first_name,setFirstName]=useState("");
async function searchCustomer() {
    let result = await axios.get("http://localhost:3000/api/customer/findCustomersByName/"+first_name)
    console.log(result)
    if(result.data.msg=="Record present"){
                setResult(true);
            setCustomer(result.data.customer)
    }else {
        setResult(false);
    }
    setMsgInfo(result.data.msg);
}
    return(
        <div>
            <h2>Search Customer Name</h2>
            <label>First Name</label>
            <input type="search" name="first_name" onChange={(event)=>setFirstName(event.target.value)}/><br/>
            <input type="button" value="Search Customer" onClick={searchCustomer}/>
            <br/>
            {msgInfo}
            <br/>
            {result?"Customer first name is "+customer.first_name+" Last name is " +customer.last_name+" Age is " +customer.age+ " Mobile no is " +customer.mobile_no+ " Gender is " +customer.gender+" Address is "+customer.address:""}
        </div>
    )
}


export default FindCustomerDetails;