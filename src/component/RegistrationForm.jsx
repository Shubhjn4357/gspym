import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LoadingButton from '@mui/lab/LoadingButton';
import {useState,useContext} from "react";
import {createData} from "../firebase/api";
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';
import {SetAdminDataNode,AdminDataNode} from "../App";
const RegistrationForm=()=>{
  const Adminstate=useContext(AdminDataNode);
  const setAdminState=useContext(SetAdminDataNode);
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
          className="glass-morphism p-2"
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
     <Stack className="my-2 text-start ms-2" direction="row">
      <Typography className="text-danger fw-bold mx-1">T/C*</Typography>
      <Typography>एक माला <strong> "ॐ श्री सौभाग्य गुरु देवा य नमः की"</strong></Typography>
    </Stack>
    <LoadingButton type="submit"
            endIcon={<SendIcon />}
            loading={Adminstate.loading}
            className="me-auto"
            loadingPosition="end"
            onClick={submit} 
            variant="contained">Submit</LoadingButton>
    </form>
    </>
    )
}
export default RegistrationForm