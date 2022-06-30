import Admin from "./component/Admin"
import Login from "./component/Login"
import SignUp from "./component/SignUp"
import Public from "./component/Public"
import {Routes,Route} from "react-router-dom";
const Rout=()=>{
  return <>
  <Routes>
     <Route exact path="/" element={<Public/>}/>
     <Route exact path="/admin" element={<Admin/>}/>
     <Route exact path="/admin/login" element={<Login/>}/>
     <Route exact path="/admin/signup" element={<SignUp/>}/>
  </Routes>
  </>
}
export default Rout;