import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
// import user from './Reducers/UserReducer';
import {getData} from './action/UserAction'
import Main from './Main';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    dispatch(getData());
  },[])
  let a ="apple"
  // const s=useSelector((state)=>state.changeTheNo);
  // const s=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  // let name="";
  return (
   <>
    <Main/>
    {/* <button onClick={()=>{dispatch(getData())}}>Submit</button> */}
   </>

  );
}

export default App;
