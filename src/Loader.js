import {useContext} from "react";
import {AdminDataNode} from "./App";
const Loader=()=>{
  const State=useContext(AdminDataNode);
 
  return <div className={`${State.loading?"d-flex":"d-none"} vh-100  glass-morphism align-items-center loader justify-content-center`}>
  <div className="spinner-border text-xl text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
}
export default Loader;