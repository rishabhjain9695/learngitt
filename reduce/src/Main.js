import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setData } from './action/UserAction';
// import { SETDATAS } from './constants';
// import user from './Reducers/UserReducer';
// import userss from './Reducers/UserSaga';
function Main() {
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.user.users);
  console.log(data,"DATA IN COMPONENT");
  //  const s=userss;
  // dispatch(setData([]))
  //  console.log(s,"f");
  // useEffect(() => {
  console.log(data,"pl;au");//   dispatch(s());
  // }, [dispatch]);
  return (
    <div>
      {data?.map((e) => {
        return <div>{e.playername}</div>;
      })}
    </div>
  )
}

export default Main
