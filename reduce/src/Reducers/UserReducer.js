

import { SETDATA,SETDATAS } from "../constants";
const user=(data=[],action)=>{
switch (action.type) {
    case SETDATA:{
      return data;

    }  
    case SETDATAS:{
      return data;
    }
    default:
        return data;
}
}
export default user;