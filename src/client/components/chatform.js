/**
 * Created by sourabh on 12/7/17.
 */
const io = require("socket.io-client");
const socket = io('http://localhost:3000');
import React from "react"
import {createMessage} from "../actions"
import {connect} from "react-redux"


class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            message: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (message) => {
//         this.props.createMessage(message);
        socket.emit('new-message', message);
        this.setState({message: ''})
    };

    componentDidMount() {
        socket.on('receive-message', (message) => {
            const messages = this.state.messages;
            messages.push(message);
            this.setState({messages})
        })
    }

    render() {
        let messages = this.state.messages.map((msg, i) => {
            return (
                <li key={i}>
                    {msg}
                </li>
            )
        });
        return (
            <div className="chatContainer">
                <div className="chats">
                    <ul>
                        {messages}
                    </ul>
                </div>
                <div>
                    <input type="text" value={this.state.message} name="message" onChange={this.handleChange}/>
                    <button name="submit" onClick={() => this.onSubmit(this.state.message)}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createMessage: (message) => {
        dispatch(createMessage(message))
    }
});

export default connect(null, mapDispatchToProps)(Chat)