import axios from 'axios'
import { takeLatest,put, call} from 'redux-saga/effects'
import { setData } from '../action/UserAction';
import { SETDATA,SETDATAS } from '../constants'
// const baseurl='https://jsonplaceholder.typicode.com/todos';
function* users(payload){
    console.log("saga called");
    try{
      let data=[];
    // let data1=yield axios.get(baseurl);
    let body=[];
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json");
    yield put(setData(Object.values(response.data)));
    console.log((response.data),"donnnnnn")
        // console.log(body,"response");
        // yield put(setData(body));
        // console.log(body,"rrrr");
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
function* Sagaa(){
    console.log("ayush");
yield takeLatest(SETDATA,users);
}
export default Sagaa;
// export default userss;