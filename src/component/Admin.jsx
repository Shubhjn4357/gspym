import {useEffect,useState,useContext,useCallback} from "react"
import { onAuthStateChanged } from "firebase/auth";
import {auth,database} from "../firebase/config";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import {styled} from "@mui/material/styles";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DialogBox from "./DialogBox";
import {DataNode,SetDataNode,SetAdminDataNode} from "../App";

const Admin=()=>{
  const State=useContext(DataNode);
  const setState=useContext(SetDataNode);
  
  const setAdminState=useContext(SetAdminDataNode);
  const [Open,setOpen]=useState(false)
  const [Data,setData]=useState({})
  const navigate=useNavigate();

  
const styledPaper=styled(Paper)({
  background: "rgba( 255, 255, 255, 0.2 )",
  boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter:"blur( 6px )",
  borderRadius: "10px",
  border:" 1px solid rgba( 255, 255, 255, 0.18 )"
  })
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleDialogData=({row,key})=>{
    setData({...row,'key':key})
    setOpen(true);
  }
  const getData=useCallback(async()=>{
    setState({type:"reset"}) 
    setAdminState({type:"load",load:true}) 
      const querySnapshot = await getDocs(collection(database, "users"));
        querySnapshot.forEach((doc) => {
         setState({type:"doc",doc:doc}) 
      // doc.data() is never undefined for query doc snapshots
        });
   return setAdminState({type:"load",load:false}) 
    },[setState,setAdminState])
   
  useEffect(()=>{
setAdminState({type:"load",load:true}) 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        getData()
        setAdminState({type:"load",load:false})
        setAdminState({type:"admin",doc:user})
        toast.success("welcome Admin " +user.email)
      } else {
        // User is signed out
        // ...
        setAdminState({type:"load",load:false}) 
        navigate("/admin/login")
      }
      })
return ()=>{
setAdminState({type:"load",load:false}) 
}
  },[navigate,getData,setAdminState])
  return (<>
  <div className="Data-table text-center">
    <h1 className="m-2">Admin Pannel</h1>
    <TableContainer component={styledPaper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">पिता/पति</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right">Mobile No.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(State)?.map(([key,row])=>{
            return <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={()=>handleDialogData({row,key})}
            >
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.relate}</TableCell>
              <TableCell align="right">{row?.age}</TableCell>
              <TableCell align="right">{row?.adress}</TableCell>
              <TableCell align="right">{row?.mobile}</TableCell>
            </TableRow>
    })}
        </TableBody>
      </Table>
    </TableContainer>
    <DialogBox reload={getData} data={Data} open={Open} handleClose={handleClose}/>

    </div>
    
    </>)
    
}
export default Admin;