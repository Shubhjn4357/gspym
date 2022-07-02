import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import {Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
const Public=()=>{
  return (<>
  <div className="text-center mt-4">
  <svg viewBox="-20 -20 550 200" className="main-head">
    <path id="curve" fill="transparent" d="M-0.62,149.67 C103.12,-5.33 351.87,-38.32 501.25,148.67 L146.87,146.67 L147.50,146.67 Z"/>
    <text className=" fw-bold heading" width="auto" stroke="#6d6d6d" strokeWidth="1px" fill="#1f1f1f">
      <textPath href="#curve">
        Guru Shri Shobhagya Prakash Yuvak Mandal
      </textPath>
    </text>
  </svg>
  <div className="container-fluid main-content py-4">
      <div className="row my-2">
        <div className="flash">38 Lucky Draw</div>
      <div className="col-12">
        <Stack direction="column">
          <Typography className="fs-md-2 fs-4 text-center text-wrap fw-bold text-danger">38 वी पुण्य तिथि पर</Typography>
        </Stack>
      </div>
    </div>
    <div className="row my-2">
      <div className="col-6">
        <img className="front-img"  src={image1} alt="pic"/>
      </div>

      <div className="col-6">
         <img className="front-img" src={image2} alt="pic"/>
      </div>
    </div>
    <div className="row">
        <div className="col text-center">
        <Stack direction="column">
          <Typography className="fs-5 fw-bold my-1 text-secondary">19 July 2022</Typography>
        </Stack>
        <Stack direction="column">
          <Typography className="fs-3 text-danger fw-bold">3838</Typography>
          <Typography className="fs-6 fw-bold">एकासना</Typography>
          <Typography className="fs-6 fw-bold my-2">Ratlam</Typography>
        </Stack>
      </div>
      </div>
    </div>
  <Divider/>
  <div className="d-flex my-4 text-center">
  <Link className="text-decoration-none mx-auto" to="/register">
    <Button className="glass-morphism"
            size="large" 
            color="error"
            endIcon={<SendIcon />}
            >Register Here</Button>
  </Link>
  </div>
  </div>
  </>)
}

export default Public;