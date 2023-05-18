import { useState } from "react";
import axios from "axios";
function AddCustomer() {

let [_eFirstname,setFirstName]=useState("");
let [_elastname,setLastName]=useState("");
let [eage,setAge]=useState(0);
let [_emobileno,setMobileNo]=useState(0);
let [egender,setGender]=useState("");
let [eaddress,setAddress]=useState("");
let [msgInfo,setMessage]=useState("");


async function storeCustomerInfo(event) {
    event.preventDefault();
   let customer = {first_name:_eFirstname,last_name:_elastname,age:eage,mobile_no:_emobileno,gender:egender,address:eaddress}
   console.log(customer)
   let result = await axios.post("http://localhost:3000/api/customer/storeCustomerInfo",customer);
   setMessage(result.data.msg);
}
    return(
        <div>
        <span>{msgInfo}</span>
            <hr/>
            <form onSubmit={storeCustomerInfo}>
            <label>First Name</label>
        <input type="text" name="_eFirstname" onChange={(event)=>setFirstName(event.target.value)}/>
            <br/>
            <label> Last Name</label>
            <input type="text" name="_elastname" onChange={(event)=>setLastName(event.target.value)}/>
            <br/>
            <label>Age</label>
            <input type="number" name="eage" onChange={(event)=>setAge(event.target.value)}/>
            <br/>
            <label>Mobile No</label>
            <input type="number" name="_emobileno" onChange={(event)=>setMobileNo(event.target.value)}/>
            <br/>
            <label>Gender</label>
            <input type="text" name="egender" onChange={(event)=>setGender(event.target.value)}/>
            <br/>
            <label>Address</label>
            <input type="text" name="eaddress" onChange={(event)=>setAddress(event.target.value)}/>
            <br/>
            <input type="submit" value="store customer"/>
            <input type="reset" value="reset"/>    
        </form>   
        </div>
    )
}


export default AddCustomer;