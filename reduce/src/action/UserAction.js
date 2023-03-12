import { SETDATA } from "../constants";
export const getData=()=>{
    console.log("a");
    return {
        type :SETDATA,
        data:"apple"
       
    }
}