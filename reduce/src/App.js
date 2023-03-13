import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
// import user from './Reducers/UserReducer';
import {getData} from './action/UserAction'
import Main from './Main';
function App() {
  // const s=useSelector((state)=>state.changeTheNo);
  // const s=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  // let name="";
  return (
   <>
    
    <button onClick={()=>{dispatch(getData())}}>Submit</button>
    <Main/>
   </>

  );
}

export default App;
