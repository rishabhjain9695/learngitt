import axios from 'axios'
import {takeEvery,put} from 'redux-saga/effects'
import { SETDATA } from '../constants';
const baseurl='https://jsonplaceholder.typicode.com/todos';
function* users(){
    console.log("saga called");
    let data=yield axios.get(baseurl);
    console.log(data,"s");
    yield put({type:SETDATA,data});
}
function* Sagaa(){
    console.log("ayush");
yield takeEvery(SETDATA,users);
}
export default Sagaa;