/**
 * Created by sourabh on 12/7/17.
 */
import {
    CREATE_MEASSAGE_SUCCESS,
    CREATE_MEASSAGE_FAILURE
} from "../constants"

const chatState = {
    message : [],
    error:null,
};
export const chatReducer = (state=chatState,action) => {
    switch (action.type){
        case CREATE_MEASSAGE_SUCCESS:{
            return {
                ...state,
            }
        }
        case CREATE_MEASSAGE_FAILURE:{
            return {
                ...state,
                error:action.error,
            }
        }
        default:{
            return state
        }
    }
};