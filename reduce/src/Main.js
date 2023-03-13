import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setData } from './action/UserAction';
// import { SETDATAS } from './constants';
// import user from './Reducers/UserReducer';
// import userss from './Reducers/UserSaga';
function Main() {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  console.log(data,"parshant");
  //  const s=userss;
  //  console.log(s,"f");
  // useEffect(() => {
  //   dispatch(s());
  // }, [dispatch]);
  return (
    <div>
      {data.map((e) => {
        return <li key={data.id}>{e.title}</li>;
      })}
    </div>
  )
}

export default Main
