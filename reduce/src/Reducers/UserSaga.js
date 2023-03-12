import axios from 'axios'
// addtoRishabh
import { takeLatest,put} from 'redux-saga/effects'
import { SETDATA,SETDATAS } from '../constants';
const baseurl='https://jsonplaceholder.typicode.com/todos';
function* users(){
    console.log("saga called");
    try{
    let data1=yield axios.get(baseurl);
    let data=data1.data;
    console.log(data,"as");
    yield put({type:SETDATAS,data});
} 
catch(error){

}
  }
function* Sagaa(){
    console.log("ayush");
yield takeLatest(SETDATA,users);
}
export default Sagaa;
// export default userss;