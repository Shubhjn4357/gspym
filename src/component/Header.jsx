import AppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import {useState/*,useContext*/} from "react";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//import {AdminDataNode} from "../App";
//import { signOut } from "firebase/auth";
//import {auth} from "../firebase/config"
//import {toast} from "react-toastify";
const Header=()=>{
 //const state=useContext(AdminDataNode);
  
  const [anchorEl, setAnchorEl] =useState(null);

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
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 
  return (
    <>
      <Bar position="sticky">
        <Container maxWidth="xl">
          <Toolbar className="justify-content-center">
             <Button aria-label="display more actions"
                     color="inherit"
                     aria-haspopup="true"
                     sx={{mx:"auto"}}
                     onClick={handleMenu} >
                <MoreIcon/>
                <span className="text-center p-2">जय महावीराय नमः</span>
                <MoreIcon />
               </Button>
          </Toolbar>
          <Toolbar className="justify-content-between">
              <span className="mx-1 text-small">जय आत्मानंद देवेन्द्र शिव</span>
              <span className="mx-1 text-small">जय सौभाग्य उमेश प्रकाश</span>
          </Toolbar>
        </Container>
          <Menu id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link className="text-decoration-none text-dark"  to="/">Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className="text-decoration-none text-dark"  to="/register">Register</Link></MenuItem>
               {/* <MenuItem onClick={handleClose}><Link className="text-decoration-none text-dark" to="/admin">Admin</Link></MenuItem>
                {state?.admin?.email?<MenuItem onClick={Logout}>Logout</MenuItem>:""}*/}
              </Menu>
      </Bar>

    </>
    )
}
export default Header;