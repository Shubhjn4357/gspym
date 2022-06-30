import {Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import {useState} from "react";
import {toast} from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/config";
import {useNavigate} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from "@mui/material/IconButton";
const Login=()=>{
  const navigate=useNavigate();
  const [loading,setloading]=useState(false)
  const initialVal={
    email:"",
    password:"",
    showPassword:true,
  }
  const [State,setState]=useState({
    ...initialVal,
  })
  const handleClickShowPassword=()=>{
    setState({
      ...State,
     "showPassword":!State.showPassword,
    })
  }
  const HandleChange=(e)=>{
    setState({
      ...State,
      [e.target.name]:e.target.value
    })
  }
  const submit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    setloading(true)
 signInWithEmailAndPassword(auth, State.email, State.password)
  .then(() => {
    // Signed in 
    
    // ...
    toast.success("welcome")
    navigate("/admin")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage+ errorCode)
  });
    setloading(false)
  }
      return (
     <div className="auth-wrapper">
     <div className="auth-inner glass-morphism">
      <form autoComplete="off"
          className="p-2">
        <h3>Sign In</h3>
          
    <div className="mb-3">
      <TextField name="email"
                 label="Email"
                 type="email"
                 className="m-2"
                 value={State.email}
                 onChange={HandleChange}
                 fullWidth
                 required/>
        </div>
    <div className="mb-3">
      <TextField name="password"
                 label="Password"
                 type={State.showPassword?"password":"text"}
                 className="m-2"
                 fullWidth
                 value={State.password}
                 onChange={HandleChange}
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
        <Typography className="me-auto my-2">Forget <Link to="#">passowrd?</Link></Typography>
        <Typography className="me-auto my-2"><Link to="/admin/signup">Create Account?</Link></Typography>

    <LoadingButton type="submit"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            onClick={submit} 
            variant="contained">Submit</LoadingButton>
      </form>
      </div>
      </div>
    )
  
}
export default Login;