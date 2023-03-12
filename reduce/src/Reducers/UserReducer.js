

import { SETDATA,SETDATAS } from "../constants";
const user=(data=[],action)=>{
switch (action.type) {
    case SETDATA:{
      return data;

    }  
    case SETDATAS:{
      return [action.data];
    }
    default:
        return data;
}
}
export default user;