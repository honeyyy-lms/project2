import { useState } from "react";
import sim from "./Login.png"
import "./App.css"
import {useNavigate} from 'react-router-dom'
function Login1(){
    const navigate=useNavigate();
    const page4=()=>{
        navigate('/Contact');
    }
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");

    const handlesignup=(e)=>{
        e.preventDefault();
    };
    return(
        <div>
            <p className="pb">B.Planet</p>
            <button className="button" onClick={page4}>Contact us</button>
            <div className="simg">
                <img src={sim} className="sim" alt="sim" />
            </div>
            <div className="txt" >
                <p style={{marginTop:50,fontSize:30,marginLeft:50}}>Sign up</p>
                <p style={{marginLeft:50}}>Welcome back !!</p>
                <br/><br/>
                <form onSubmit={handlesignup}>
                    <label htmlFor="email" style={{marginLeft:50,fontWeight:550}}>Email</label>
                    <br/>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value) }style={{marginLeft:50,width:400,height:50}} required />
                    <br/><br/>
                    <label htmlFor="password" style={{marginLeft:50,fontWeight:550}}>Password</label>
                    <br/>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value) }style={{marginLeft:50,width:400,height:50}} required />
                    <label htmlFor="password" style={{marginLeft:50,fontWeight:550}}>Confirm Password</label>
                    <br/>
                    <input type="password" placeholder="Enter Confirm Password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value) }style={{marginLeft:50,width:400,height:50}} required />
                    <button type="submit" className="submit">Signup</button>
                    
                
                    </form>

            </div>
        </div>

    );
}
export default Login1;
