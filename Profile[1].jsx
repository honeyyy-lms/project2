import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"
import profile from "./profile.jpg"
function Profile(){
    const navigate=useNavigate();
    const page4=()=>{
        navigate('/Contact');
    };
    const[edit,setedit]=useState(true);
    const[text1,settext1]=useState('');
    const[text2,settext2]=useState('');
    const[text3,settext3]=useState('');
    const[text4,settext4]=useState('');
    const[text5,settext5]=useState('');
    const[text6,settext6]=useState('');
    const[text7,settext7]=useState('');
     const handleeditclick=()=>{
          setedit(!edit);
        };
    const handletextchange1=(event)=>{
        settext1(event.target.value);
    };
    const handletextchange2=(event)=>{
        settext2(event.target.value);
    };
    const handletextchange3=(event)=>{
        settext3(event.target.value);
    };
    const handletextchange4=(event)=>{
        settext4(event.target.value);
    };
    const handletextchange5=(event)=>{
        settext5(event.target.value);
    };
    const handletextchange6=(event)=>{
        settext6(event.target.value);
    };
    const handletextchange7=(event)=>{
        settext7(event.target.value);
    };
    return(
        <div>
            <p className="pb">B.Planet</p>
            <button className="button1" onClick={page4}>Contact us</button>
            <div className="box">
                <img src={profile} className="pro" />
                <div style={{padding:20}}>
                <button style={{float:"right", width:50,cursor:"pointer"}} onClick={handleeditclick}>{edit?'Save':'Edit'}</button>
                <label htmlFor="name" className="label">Name</label>
                <br/>
                {edit?(<input type="text" name="name" id="name" value={text1} onChange={handletextchange1} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text1}</span>)}
               <br/><br/>
                <label htmlFor="email" className="label">Email</label>
                <br/>
                {edit?(<input type="email" name="email" id="email" value={text2} onChange={handletextchange2} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text2}</span>)}
                <br/><br/>
                <label htmlFor="password" className="label">Password</label>
                <br/>
                {edit?(<input type="password" name="password" id="password" value={text3} onChange={handletextchange3} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text3}</span>)}
                <br/><br/>
                <label htmlFor="phone" className="label">Phone Number</label>
                <br/>
                {edit?(<input type="text" name="phone" id="phone" value={text4} onChange={handletextchange4} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text4}</span>)}
                <br/><br/>
                <label htmlFor="address" className="label">Address</label>
                <br/>
                {edit?(<input type="text" name="address" id="address" value={text5} onChange={handletextchange5} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text5}</span>)}
                <br/><br/>
                <label htmlFor="state" className="label">State</label>
                <br/>
                {edit?(<input type="text" name="state" id="state" value={text6} onChange={handletextchange6} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text6}</span>)}
                <br/><br/>
                <label htmlFor="code" className="label">Zip Code</label>
                <br/>
                {edit?(<input type="text" name="code" id="code" value={text7} onChange={handletextchange7} style={{width:500,height:40,backgroundColor:"lightblue"}}/>):(<span>{text7}</span>)}

                
                
                </div>

            </div>
        </div>

    );
}
export default Profile;