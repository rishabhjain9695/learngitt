import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setData } from './action/UserAction';
import { SETDATAS } from './constants';
import user from './Reducers/UserReducer'
// import userss from './Reducers/UserSaga';
function Main() {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  //  const s=userss;
  //  console.log(s,"f");
  // useEffect(() => {
  //   dispatch(s());
  // }, [dispatch]);
  return (
    <div>
      {/* {s.data.map((e)=>{
        return <div>e.title</div>
      })} */}
      {data.map((e) => {
        return <div>{e.title}</div>;
      })}
    </div>
  )
}

export default Main
