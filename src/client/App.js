/**
 * Created by sourabh on 12/7/17.
 */
import  React from "react"
import Chat from "./components/chatform"
import "./chat.css";
export default class App extends React.Component{
    render(){
        return(
            <div>
               <Chat/>
            </div>
        )
    }

}