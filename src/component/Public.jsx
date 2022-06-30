import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import {Link} from "react-router-dom";
const Public=()=>{
  return (<>
  <div className="text-center mt-4">
  <svg viewBox="-20 -10 550 200">
    <path id="curve" fill="transparent" d="M-0.62,149.67 C103.12,-5.33 351.87,-38.32 501.25,148.67 L146.87,146.67 L147.50,146.67 Z"/>
    <text className=" fw-bold heading" width="auto" stroke="#6d6d6d" strokeWidth="1px" fill="#1f1f1f">
      <textPath href="#curve">
        Guru Shri Shobhagya Prakash Yuvak Mandal
      </textPath>
    </text>
  </svg>
  <div className="container-fluid">
      <div className="row my-2">
        <div className="flash"><Typography>38 लक्की ड्रा</Typography></div>
      <div className="col-12">
        <Stack direction="column">
          <Typography className="fs-2 text-center text-wrap fw-bold text-danger">38 वी पुण्य तिथि पर</Typography>
        </Stack>
      </div>
    </div>
    <div className="row my-2">
      <div className="col-3">
        <img className="front-img"  src={image1} alt="pic"/>
      </div>
      <div className="col-6 text-center">
        <Stack direction="column">
          <Typography className="fs-5 fw-bold my-1 text-secondary">19 July 2022</Typography>
        </Stack>
        <Stack direction="column">
          <Typography className="fs-3 text-danger fw-bold">3838</Typography>
          <Typography className="fs-6">एकासना</Typography>
          <Divider/>
          <Typography className="fs-6 my-2">Ratlam</Typography>
        </Stack>

      </div>
      <div className="col-3">
         <img className="front-img" src={image2} alt="pic"/>
      </div>
    </div>

 </div>
  <Divider/>
  <div className="d-flex my-4 text-center">
  <Link className="text-decoration-none mx-auto" to="/register">
    <Button size="large" color="secondary" >Register Here</Button>
  </Link>
  </div>
  </div>
  </>)
}

export default Public;