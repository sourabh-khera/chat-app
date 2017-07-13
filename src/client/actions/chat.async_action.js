/**
 * Created by sourabh on 12/7/17.
 */
import {
    createMessageSuccess,
    createMessageFailure
} from "./chat.action"

export const createMessage = (message) => {
    return (dispatch) => {
       fetch("http://localhost:3000/api/chat/create",{
           method:'post',
           headers:{
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(message)
       })
           .then(response=>response.json())
           .then(data=>{
               dispatch(createMessageSuccess())
           })
           .catch(error=>{
               dispatch(createMessageFailure(error))
           })
    }
};