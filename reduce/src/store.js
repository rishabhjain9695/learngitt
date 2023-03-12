import {configureStore} from "@reduxjs/toolkit"
import rootreducer from "./Reducers";
import Sagaa from "./Reducers/UserSaga";
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware=createSagaMiddleware();
const store=configureStore({reducer:rootreducer,
middleware:()=>[sagaMiddleware]});
sagaMiddleware.run(Sagaa);
export default store;