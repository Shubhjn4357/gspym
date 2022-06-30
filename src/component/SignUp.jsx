import {Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useState} from "react";
import Stack from '@mui/material/Stack';
import {toast} from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/config";
import {useNavigate} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from "@mui/material/IconButton";
const SignUp=()=>{
  
  const navigate=useNavigate();
  
  const initialVal={
    email:"",
    password:"",
    showPassword:true,
  }
  
  const [State,setState]=useState({
    ...initialVal,
  })
  const HandleChange=(e)=>{
    setState({
      ...State,
      [e.target.name]:e.target.value
    })
  }
const handleClickShowPassword=()=>{
    setState({
      ...State,
     "showPassword":!State.showPassword,
    })
  }
  const submit=(e)=>{
e.preventDefault(); 
e.stopPropagation();
 
 createUserWithEmailAndPassword(auth, State.email, State.password)
  .then(() => {
    // Signed in 
    // ...
    toast.success("Registered")
    navigate("/admin")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    toast.error(errorMessage+ errorCode)
   
  });
  
  }
      return (
     <div className="auth-wrapper">
     <div className="glass-morphism auth-inner">
      <form autoComplete="off"
          className="p-2">
        <h3>Sign Up</h3>
          
    <div className="mb-3">
      <TextField name="email"
                 label="Email"
                 type="email"
                 className="m-2"
                 value={State.email}
                 fullWidth
                 onChange={HandleChange}
                 required/>
        </div>
    <div className="mb-3">
      <TextField name="password"
                 label="Password"
                 type={State.showPassword?"password":"text"}
                 className="m-2"
                 value={State.password}
                 onChange={HandleChange}
                 fullWidth
                 InputProps={{
                    endAdornment: <InputAdornment position="end">
                  <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleClickShowPassword}
                      edge="end"
                    >
                  {State.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                    </InputAdornment>,
                  }}
                 required/>
        </div>
        <Stack className="flex-start" >
          <Typography className="ms-auto my-2">Already Have an<Link to="/admin/login">Account?</Link></Typography>
        </Stack>
    <Stack className="flex-start px-4">
    <Button type="submit"
            sx={{
              backgroundColor: "rgb(197,182,101)",
              background: "radial-gradient(circle, rgb(255,218,8) 15%, rgb(249,8,0) 100%)",
              color:"rgb(0,0,0)",
            }}
            endIcon={<SendIcon />}
            className="me-auto ms-4"
            onClick={submit} 
            variant="contained">Submit</Button>
     </Stack>
      </form>
    </div>
    </div>
    )
  
}
export default SignUp;