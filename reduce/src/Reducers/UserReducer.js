

import { SETDATA } from "../constants";
const user=(data=[],action)=>{
switch (action.type) {
    case SETDATA:{
      return [action.data];

    }  
    default:
        return data;
}
}
export default user;