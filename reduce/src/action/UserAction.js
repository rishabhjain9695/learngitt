import { SETDATA,SETDATAS } from "../constants";
export const getData=()=>{
    console.log("a");
    return {
        type :SETDATA,
        data:"apple"
       
    }
}
export const setData=(data)=>{
    console.log("a");
    return {
        type :SETDATAS,
        data
       
    }
}