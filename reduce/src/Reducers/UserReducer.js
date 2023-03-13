

import { SETDATA,SETDATAS } from "../constants";

const initalData = {
  users: []
}
const user=(data=initalData,action)=>{
switch (action.type) {
  case  SETDATA:
    return data;
    case SETDATAS:
      
      console.log(action.data,"ppppppppppp");
      return {...data, users: action.data.map((data) => ({...data})) };
    default:
        return data;
}
}
export default user;