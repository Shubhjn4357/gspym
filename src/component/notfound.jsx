import {Link} from "react-router-dom";
const NotFound=()=>{
  return (
    <>
      <div className="bg-notfound">
        <span className="notfound-text">404</span>
        <Link className="text-decoration-none mx-auto my-4" to="/"><button className="btn btn-warning">Go Home</button></Link>
      </div>
    </>
    )
}
export default NotFound;