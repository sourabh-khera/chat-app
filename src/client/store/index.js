import { reduxMiddlware } from "../middlewares/index"
import { applyMiddleware, createStore } from "redux"
import {chatReducer} from "../reducers/index"


const middlewares = applyMiddleware(...reduxMiddlware);
const store = createStore(chatReducer, middlewares);
export default store;