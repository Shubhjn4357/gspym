import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
const ListItemComponent=({item})=>{
    return   <ListItem>
              <ListItemButton color="danger" variant="soft">
                <ListItemIcon>
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.text} secondary={item?.num}/>
              </ListItemButton>
            </ListItem>
  }
  export default ListItemComponent;