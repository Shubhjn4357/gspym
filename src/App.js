import Rout from "./Rout";
import { ToastContainer} from 'react-toastify';  
import Header from "./component/Header";
import {useReducer,createContext} from "react";
import { BrowserRouter as Bs,Outlet} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./component/admin.css";
import './App.css';
import {Reducer,AdminReducer} from "./Reducer/Reduce";
import Loader from "./Loader";
export const DataNode=createContext();
export const SetDataNode=createContext();
export const AdminDataNode=createContext();
export const SetAdminDataNode=createContext();
function App() {
  const [State,setState]=useReducer(Reducer,"")
  const [AdminState,setAdminState]=useReducer(AdminReducer,"")
  return (
    <Bs>
    <AdminDataNode.Provider value={AdminState}>
    <SetAdminDataNode.Provider value={setAdminState}>
    <DataNode.Provider value={State}>
    <SetDataNode.Provider value={setState}>
    <div className="App">
    <Loader/>
    <Header></Header>
      <ToastContainer position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover />
           <Outlet/>
           <Rout/>
    </div>
    </SetDataNode.Provider>
    </DataNode.Provider>
    </SetAdminDataNode.Provider >
    </AdminDataNode.Provider >
    </Bs>
  );
}

export default App;
