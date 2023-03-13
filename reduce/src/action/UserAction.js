import { SETDATA,SETDATAS } from "../constants";
export const getData=()=>{
    // console.log("a");
    return {
        type : SETDATA
    }
}
export const setData=(data)=>{
    console.log(data,"setData action");
    return {
        type : SETDATAS,
        data
    }
}
