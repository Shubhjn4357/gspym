/*import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import {useState,useContext} from "react";
import {createData} from "../firebase/api";
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';
import {SetAdminDataNode} from "../App";*/
const RegistrationForm=()=>{
 return <iframe title="Register Form" src="https://docs.google.com/forms/d/e/1FAIpQLScWdF4c2dMUepscwWMvTI23CocE5j-rbAEtIf3Jk4cnN5pelQ/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0">
 <div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
 </iframe>

/* const setAdminState=useContext(SetAdminDataNode);
  const initialVal={
    name:"",
    relate:"" ,
    age:"",
    adress:"",
    mobile:""
  }
  const [State,setState]=useState({
    userId:new Date().getUTCMilliseconds(),
    ...initialVal,
  })
  const HandleChange=(e)=>{
    setState({
      ...State,
      [e.target.name]:e.target.value
    })
  }
  const submit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
   
    if(State.name && State.relate && State.age && State.adress && State.mobile){
        setAdminState({type:"load",load:true}) 
        createData(State)
        setState({
          userId:"",
          ...initialVal,
        })
        setAdminState({type:"load",load:false}) 
    }
    else {
    setAdminState({type:"load",load:false}) 
      toast.error("fill All Field")
    }
   
  }
  return (
    <>
    <form autoComplete="off"
          className="glass-morphism p-2 mt-4"
          id="registerForm"
    >
    <Typography className="fs-4 fw-bold my-2">Register</Typography>
      <TextField name="name"
                 label="Name*"
                 className="m-2"
                 value={State.name}
                 onChange={HandleChange}
                 required/>
      <TextField name="relate"
                 label="पिता/पति का नाम*"
                 className="m-2"
                 value={State.relate}
                 onChange={HandleChange}
                 required/>
      <TextField name="age"
                 label="Age*"
                 type="number"
                 className="m-2"
                 value={State.age}
                 onChange={HandleChange}
                 required/>
      <TextField name="adress"
                 label="Adress*"
                 className="m-2"
                 value={State.adress}
                 onChange={HandleChange}
                 required/>
      <TextField name="mobile"
                 label="Mobile No.*"
                 className="m-2"
                 type="number"
                 value={State.mobile}
                 onChange={HandleChange}
                 required/>
     <Stack className="my-2 text-start ms-2" spaceing={1} direction="row">
      <Typography className="text-danger fw-bold mx-1 ms-4">T/C*</Typography>
      <Typography>एक माला <strong> "ॐ श्री सौभाग्य गुरु दुेेवाय नमः की"</strong></Typography>
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
    </>
    )*/
}
export default RegistrationForm