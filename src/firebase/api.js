
import {database} from "./config";
import { collection, addDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify';
export const createData=async({name,relate,age,adress,mobile})=>{
  try {
  await addDoc(collection(database, "users"), {
      date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      name: name,
      relate:relate,
      age:age,
      adress:adress,
      mobile:mobile
  });
  toast.success("Thankyou For Registration");
} catch (e) {
  console.log(e)
  toast.error("Error adding document: ", e);
}
}