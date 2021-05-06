import classNames from 'classnames';
import { Component } from 'react';
import { TChatContent } from '../propTypes';
import ChatImage from './ChatImage';

export default class ChatContent extends Component<{ data: TChatContent }> {
    render() {
        return (
            <article className="chat-content" >
                <ChatImage online={this.props.data.online} picSrc={this.props.data.userPicSrc} />
                <div className="preview">
                    <div>
                        <div className="date">{this.props.data.lastMessage.date}</div>
                        <div className="name">{this.props.data.chatName}</div>
                    </div>
                    <div>
                        <div className={classNames({
                            'count-new-messages': true,
                            'visible': this.props.data.countNewMessages > 0
                        })}>
                            <div>{this.props.data.countNewMessages > 99 ? '99+' : this.props.data.countNewMessages}</div>
                        </div>
                        <p className="last-message">{this.props.data.lastMessage.text.trim().substring(0, 150)}</p>
                    </div>
                </div>
            </article>
        )
    }
}