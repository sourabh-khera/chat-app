/**
 * Created by sourabh on 27/6/17.
 */

import {logger} from "redux-logger"
import thunkMiddleware from "redux-thunk"


export const reduxMiddlware=[ thunkMiddleware, logger];
