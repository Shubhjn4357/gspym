import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
//import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

//import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
//import ListItemComponent from "./ListItemComponent";
const Public=()=>{
   /* const verticalLane=[
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
    ]
    const horizontalLane=[
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      },
      {
        icon:<AccountCircleRoundedIcon/>,text:"xyz",num:"***********"
      }
  ]*/
  return (<>
  <div className="text-center mt-4">
    <Typography className="main-head">
       <span className="fs-2 fw-bolder text-danger"> मालव केसरी प्रसिद्ध वक्ता श्री सोभाग्यमल जी मा.सा </span>
       <span className="fs-3 fw-bolder mt-2">की 38वी पुण्य तिथि उपलक्ष्य में</span>
       <span className="fs-3 fw-bolder"> श्रावण विदी नवमी </span>
    </Typography>
  <div className="container-fluid main-content">
    <div className="row ">
      <div className="col-4">
        <div className="front-img">
          <img src={image1} alt="pic1"/>
        </div>
      </div>
      <div className="col-4 d-flex align-items-center flex-column justify-content-center">
         
          <Stack className="text-center" direction="column" spacing={0}>
            <Typography className="fs-2 mx-auto text-danger fw-bold">भव्य एकासना दिवस</Typography>
            <Typography className="fs-4 mx-auto fw-bolder mb-">दिनांक 22 जुलाई 2022 शुक्रवार </Typography>
          </Stack>
           <Stack className="text-center" direction="column" spacing={0}>
            <Typography className="fs-3 mx-auto mt-4 text-danger">- विशेष -</Typography>
            <Typography className="fs-3 mx-auto fw-bold">ॐ श्री सौभाग्य गुरुदेवाय नमः</Typography>
            <Typography className="fs-5 mx-auto fw-bold">की माला अवस्य गिने</Typography>
          </Stack>
      </div>
      <div className="col-4">
        <div className="front-img">
          <img src={image2} alt="pic2"/>
        </div>      
      </div>
      <div className="col-12 d-center">
           <Stack className="text-center" direction="column" spacing={0}>
            <Typography className="fs-3 mx-auto text-danger">- आमंत्रण -</Typography>
            <Typography className="fs-3 mx-auto">रतलाम में एकासन करने वालो की व्यवस्था गुरु श्री सौभाग्य तीर्थ पर रखी गयी है</Typography>
          </Stack>
      </div>
    </div>
    </div>
  <Divider/>
  <div className="container-fluid">
    <div className="row my-1">
        {/*<div className="col-12 d-flex p-2 glass-morphism overflow-scroll">
        <List sx={{justifyContent:'space-around',display:'flex'}}>
         {horizontalLane.map((item,k)=>{
         return <ListItemComponent key={k} item={item}/>
         })}
         </List>
        </div>
    </div>
    <div className="row my-1">
        <div className=" col-3 p-2 glass-morphism overflow-scroll">
          <List sx={{display:(window.innerWidth<768?'flex':'block')}}>
           {verticalLane.map((item,k)=>{
           return <ListItemComponent key={k} item={item}/>
           })}
           </List>
        </div>*/}
        <div id="register" className="col-12">
          <iframe className="glass-morphism" title="Register Form" src="https://docs.google.com/forms/d/e/1FAIpQLScWdF4c2dMUepscwWMvTI23CocE5j-rbAEtIf3Jk4cnN5pelQ/viewform?embedded=true" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0"/>
        </div>
    </div>
  </div>
  </div>
  </>)
}

export default Public;