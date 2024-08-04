
import { useState } from "react";
import "./App.css"
function Contact(){
    const[edit,setedit]=useState(true);
    const[text1,settext1]=useState('');
    const[text2,settext2]=useState('');
    const[text3,settext3]=useState('');
    const handleedit=()=>{
        setedit(!edit);
    };
    const handlechange1=(event)=>{
        settext1(event.target.value);
    };
    const handlechange2=(event)=>{
        settext2(event.target.value);
    };
    const handlechange3=(event)=>{
        settext3(event.target.value);
    };
    const handlesubmit=(event)=>{
        event.preventDefault();
        setedit(true);
        alert('Submitted');
    };
    return(
        <div>
             <p className="b">B.Planet</p>
             <p className="contact">Contact us</p>
             <div className="box1">
                <p style={{fontSize:23,marginTop:20,marginLeft:20}}>Stay Updated</p>
                <p style={{marginLeft:20}}>Need to get in touch with us ?</p>
                <a href="https://www.instagram.com/code_help_/?hl=en" target="_blank" rel="noopener noreferrer" style={{margin:20,fontSize:20}}>Instagram</a>
            </div>
             <div className="box2">
                <form onSubmit={handlesubmit}>
                {edit?(<input type="text" value={text1} style={{width:500,height:50,margin:20}} onChange={handlechange1} />):(<p>{text1}</p>)}
                {edit?(<input type="text" value={text2} style={{width:500,height:50,margin:20,marginTop:10}} onChange={handlechange2} />):(<p>{text2}</p>)}
                {edit?(<input type="text" value={text3} style={{width:500,height:100,margin:20,marginTop:10}} onChange={handlechange3}/>):(<p>{text3}</p>)}
                {edit?(<button type="submit" className="sub">submit</button>):(<button type="button" onClick={handleedit}>Edit</button>)}
                </form>
             </div>
        </div>

    );

}
export default Contact;