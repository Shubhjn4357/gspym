import AppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {AdminDataNode} from "../App";
import { signOut } from "firebase/auth";
import {auth} from "../firebase/config"
import {toast} from "react-toastify";
const Header=()=>{
  const state=useContext(AdminDataNode);
  
  const [anchorEl, setAnchorEl] =useState("");

  const Bar=styled(AppBar)({
  background: "rgba( 255, 255, 255, 0.2 )",
  boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter:"blur( 6px )",
  color:"#212121",
  borderRadius:"10px",
  border:"1px solid rgba( 255, 255, 255, 0.18 )",
  top:"0",
  });
 
const Logout=()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
  toast.success("See You Later")
}).catch((error) => {
  // An error happened.
  toast.error(error.message)
});
}
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl("");
  }; 
  return (
    <>
      <Bar position="sticky">
        <Container maxWidth="xl">
          <Toolbar className="">
           <IconButton size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                        aria-haspopup="true"
                        onClick={handleMenu} >
            <MoreIcon/>
            <Stack className="text-center p-2">श्रम महावीराय नमः</Stack>
            <MoreIcon />
           </IconButton>
           <Menu 
                id="menu-appbar"
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
                <MenuItem onClick={handleClose}><Link className="text-decoration-none text-dark" to="/admin">Admin</Link></MenuItem>
                {state?.admin?.email?<MenuItem onClick={Logout}>Logout</MenuItem>:""}
              </Menu>
          </Toolbar>
        </Container>
      </Bar>

    </>
    )
}
export default Header;