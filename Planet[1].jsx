import "./App.css"
import {useNavigate} from 'react-router-dom'
import img1 from "./Hero image 1.png"
import img2 from "./hero image 2.png"
import im1 from "./image 1.png"
import im2 from "./image 2.png"
import im3 from "./image 3.png"
import im4 from "./image 4.png"
import im5 from "./image 5.png"
import im6 from "./image 6.png"
import im7 from "./image 7.png"
import im8 from "./image 8.png"
import im9 from "./image 9.png"
import im10 from "./image 10.png"
import im11 from "./image 11.png"
import im12 from "./image 12.png"
import im13 from "./image 13.png"
import im14 from "./image 14.png"
import im15 from "./image 15.png"
import im16 from "./image 16.png"
import im17 from "./image 17.png"
import im18 from "./image 18.png"
import im19 from "./image 19.png"
import im20 from "./image 14-1.png"

function Planet(){
    const navigate= useNavigate();
    const nextPage=()=>{
        navigate('/Description');
    }
    const page2=()=>{
        navigate('/Login')
    }
    const page3=()=>{
        navigate('/Profile');
    }
    const page4=()=>{
        navigate('/Contact');
    }
    return(
        <div className="header">
     <p className="b">B.planet</p>
     <p className="h">'As intersting as a plant'</p>
     <button className="button" onClick={page4}>Contact us</button>
     <img src={img1} className="img1" alt="h1"/>
     <img src={img2} className="img2" alt="h2"/>
     <div className="product">
     <p className="producth">Featured Product</p>
     </div>
       <div className="grid-container">
        <div className="grid-item"><img src={im1} alt="1" /><p className="item">Tree1</p></div>
        <div className="grid-item"><img src={im2} alt="2"/><p className="item">Tree2</p></div>
        <div className="grid-item"><img src={im3} alt="3"/><p className="item">Tree3</p></div>
        <div className="grid-item"><img src={im4} alt="4"/><p className="item">Tree4</p></div>
        <div className="grid-item"><img src={im5} alt="5"/><p className="item">plant1</p></div>
        <div className="grid-item"><img src={im6} alt="6"/><p className="item">plant2</p></div>
        <div className="grid-item"><img src={im7} alt="7"/><p className="item">plant3</p></div>
        <div className="grid-item"><img src={im8} alt="8"/><p className="item">plant4</p></div>
        <div className="grid-item"><img src={im9} alt="9"/><p className="item">Tray</p></div>
        <div className="grid-item"><img src={im10} alt="10"/><p className="item">Soil</p></div>
        <div className="grid-item"><img src={im11} alt="11"/><p className="item">Soil2</p></div>
        <div className="grid-item"><img src={im12} alt="12"/><p className="item">Spade</p></div>
        <div className="grid-item"><img src={im13} alt="13"/><p className="item">Duck1</p></div>
        <div className="grid-item"><img src={im20} alt="14"/><p className="item">Duck2</p></div>
        <div className="grid-item"><img src={im14} alt="15"/><p className="item">Duck3</p></div>
        <div className="grid-item"><img src={im15} alt="16"/><p className="item">Duck4</p></div>
        <div className="grid-item"><img src={im16} alt="17"/><p className="item">Pot1</p></div>
        <div className="grid-item"><img src={im17} alt="18"/><p className="item">Pot2</p></div>
        <div className="grid-item"><img src={im18} alt="19"/><p className="item">Pot3</p></div>
        <div className="grid-item"><img src={im19} alt="20"/><p className="item">Pot4</p></div>
        </div> 
        <div className="page">
        <button onClick={nextPage}style={{cursor:"pointer"}}>Next</button>
        </div>
        <button className="log" onClick={page2}>Log In</button>
        <button className="profile" onClick={page3}>Profile</button>
        </div>
    );
}
export default Planet;