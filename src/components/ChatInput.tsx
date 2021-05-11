import { Component } from 'react';

export default class ChatInput extends Component {
    render() {
        return (
            <div className="input-contaner chat-input">
                <span className="material-icons">attach_file</span>
                <textarea placeholder="Enter your message" />
                <span className="material-icons">send</span>
            </div>
        )
    }
}
