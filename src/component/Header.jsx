import AppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';


import Button from '@mui/material/Button';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
//import {AdminDataNode} from "../App";
//import { signOut } from "firebase/auth";
//import {auth} from "../firebase/config"
//import {toast} from "react-toastify";
const Header=()=>{
 //const state=useContext(AdminDataNode);
  
  

  const Bar=styled(AppBar)({
  background: "rgba( 255, 255, 255, 0.2 )",
  boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter:"blur( 6px )",
  color:"#212121",
  borderRadius:"10px",
  border:"1px solid rgba( 255, 255, 255, 0.18 )",
  top:"0",
  });
 
/*const Logout=()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
  toast.success("See You Later")
}).catch((error) => {
  // An error happened.
  toast.error(error.message)
});
}*/

  return (
    <>
      <Bar position="sticky">
        <Container maxWidth="xl">
          <Toolbar className="justify-content-center">
             <Button aria-label=" actions"
                     color="inherit"
                     sx={{mx:"auto"}}>
                <MoreIcon/>
                <span className="text-center p-2">जय महावीराय नमः</span>
                <MoreIcon />
               </Button>
          </Toolbar>
          <Toolbar className="justify-content-between">
              <span className="mx-1 text-small">जय आत्मानंद देवेन्द्र शिव</span>
              <span className="mx-1 text-small">श्री धर्मदासाचार्य नमः</span>
              <span className="mx-1 text-small">जय गुसौभाग्य उमेश प्रकाश</span>
          </Toolbar>
        </Container>

      </Bar>

    </>
    )
}
export default Header;