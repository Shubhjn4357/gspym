/*import Admin from "./component/Admin"
import Login from "./component/Login"
import SignUp from "./component/SignUp"*/
import Public from "./component/Public"
import NotFound from "./component/notfound"
import RegistrationForm from "./component/RegistrationForm"
import {Routes,Route} from "react-router-dom";
const Rout=()=>{
  return <>
  <Routes>
     <Route exact path="/" element={<Public/>}/>
     <Route exact path="/register" element={<RegistrationForm/>}/>
     {/*<Route exact path="/admin" element={<Admin/>}/>
     <Route exact path="/admin/login" element={<Login/>}/>
     <Route exact path="/admin/signup" element={<SignUp/>}/>*/}
     <Route exact path='*' element={<NotFound/>} />
  </Routes>
  </>
}
export default Rout;