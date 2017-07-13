/**
 * Created by sourabh on 12/7/17.
 */
import {
    CREATE_MEASSAGE_SUCCESS,
    CREATE_MEASSAGE_FAILURE
} from "../constants"

export const createMessageSuccess = () => {
   return {type:CREATE_MEASSAGE_SUCCESS}
};
export const createMessageFailure = (error) => {
  return {type:CREATE_MEASSAGE_FAILURE,error}
};