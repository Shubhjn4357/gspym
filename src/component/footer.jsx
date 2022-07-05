import AppBar from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
const Footer=()=>{
  const Bar=styled(AppBar)({
  background: "rgba( 255, 255, 255, 0.2 )",
  boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter:"blur( 6px )",
  color:"#212121",
  borderRadius:"10px",
  border:"1px solid rgba( 255, 255, 255, 0.18 )",
  bottom:"0",
  });
 

  return (
    <>
      <Bar position="sticky">
        <Container maxWidth="xl">
          <Toolbar className="justify-content-center">
            <footer>आयोजक - गुरु श्री सौभाग्य प्रकाश युवक मंडल,रतलाम</footer>
          </Toolbar>
        </Container>
      </Bar>

    </>
    )
}
export default Footer;