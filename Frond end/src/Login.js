import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
let [emailid,setEmailId]=useState();
let [pass,setPassword]=useState();
let navigate = useNavigate();
let [typeofuser,setTypeOfUser]= useState();
// function checkUser(event) {
//     event.preventDefault();
//     if(emailid=="raj@gmail.com" && pass=="123"){
//         alert("success")
//         navigate("/home");
//     }else {
//         alert("failure");
//     }
// }
async function checkUserFromDb(event) {
    event.preventDefault();
    let login = {emailid:emailid,password:pass,typeofuser:typeofuser};      // json data using useState hook

    let result =await axios.post("http://localhost:3000/api/login/signIn",login); 
   
    if(result.data.msg=="Admin done login successfully"){
        alert(result.data.msg)
        navigate("/adminhome");
    }else if(result.data.msg=="Customer done login successfully") {
        alert(result.data.msg);
        navigate("/customerhome");
    }else {
        alert("Failure try once agian")
    }

}
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={checkUserFromDb}>
                <label>EmailId</label>
                <input type="email" name="emailid" onChange={(e)=>setEmailId(e.target.value)}/><br/>
                <label>Password</label>
                <input type="password" name="pass" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <label>TypeOfUser</label>
                <input type="radio" name="typeofuser" value="customer" onClick={(e)=>setTypeOfUser(e.target.value)}/>Customer
                <input type="radio" name="typeofuser" value="admin" onClick={(e)=>setTypeOfUser(e.target.value)}/>Admin <br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/> 
            </form>
        </div>
    )
}

export default Login;