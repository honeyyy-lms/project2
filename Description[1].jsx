import "./App.css"
import sideimg from "./image 1.png"
import { useNavigate } from "react-router-dom";
function Description(){
      const navigate=useNavigate();
      const page4=()=>{
         navigate('/Contact');
      };
    return(
        <div className="des">
            <center style={{fontSize:30, }}className="p">B.planet</center>
            <button className="button1" onClick={page4}>Contact us</button>
            <img src={sideimg} className="side" />
            <p className="head1">Tree 1</p>
            <p className="p1">Three Leaf Clover,symbolizes good luck and fortune in many cultures.</p>
            <p className="head2">Plant Care Guide</p>
            <p className="sh1">Water</p>
            <p className="p2">Allow the soil to dry out completely before watering.</p>
            <p className="sh2">Light</p>
            <p className="p3">Bright indirect light environments</p>
            <p className="sh3">Tips</p>
            <p className="p4">Gently insert a toothpick into the soil to determine</p>
            <br/>
                <p className="p5"> if your plant needs watering</p>
             <p className="head3">Description</p>   
             <p className="p6">A caudiciform plant with reddish and green leaves.Interestingly,the leaves fold</p>
             <p className="p7">up in pairs during the evening.Keep away from children and pets.</p>  
             <br/>
             <p className="p8">Plants images depicted are solely for illustration purpose only</p> 
        </div>
    );
    
}
export default Description;