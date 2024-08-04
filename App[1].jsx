import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Planet from "./Planet"
import Description from "./Description";
import Profile from "./Profile";
import Contact from './Contact';
import Login from "./Login";
import Login1 from './Login1';
function App(){
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Planet/>}></Route>
      <Route path="/Description" element={<Description/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Login1' element={<Login1/>}></Route>

    </Routes>
 </Router>
  </>
  );
}
export default App;