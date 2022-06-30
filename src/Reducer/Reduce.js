export const Reducer=(state,{type,doc})=>{
 switch (type) {
   case "reset":
    return ""
   case "doc":
    return {...state,[doc.id]:doc.data()}
   default:
    return "";
 } 
}
export const AdminReducer=(state,{type,doc,load})=>{
 switch (type) {
   case "admin":
     return {...state,"admin":doc}
   case "reset":
    return ""
   case "load":
    return {...state,"loading":load}
   default:
    return "";
 } 
}