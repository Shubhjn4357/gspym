import {forwardRef,useContext} from 'react';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
//import DialogTitle from '@mui/material/DialogTitle';
//import DialogContent from '@mui/material/DialogContent';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { doc, deleteDoc } from "firebase/firestore";
import {database} from "../firebase/config";
import {toast} from "react-toastify";
import {SetAdminDataNode} from "../App";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox=({reload,data,open,handleClose})=>{
  const setState=useContext(SetAdminDataNode);
  const Delete=async(data)=>{
   setState({type:"load",load:true})  
    try{
      await deleteDoc(doc(database, "users",data.key));
      setState({type:"load",load:false}) 
      toast.info(`${data.name} is Removed`)
      reload()
      handleClose()
    }
    catch(error){
      
      toast.error(error)
    }
}
  
  return (
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>

            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {data.name} Details
            </Typography>
            <IconButton
              edge="start"
              color="error"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary={data.relate} secondary="पिता/पति" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={data.age} secondary="Age" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={data.adress} secondary="Adress" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={data.mobile} secondary="Mobile No." />
          </ListItem>
        </List>
        
        <DialogActions>
          <Button onClick={()=>Delete(data)} className="ms-auto me-4" variant="contained" color="error">Delete</Button>
        </DialogActions>
      </Dialog>
  
  );
}
export default DialogBox;