import { Component } from 'react';
import OnlineIndicator from './OnlineIndicator';
import defaultUserPic from '../assets/user.png';

export default class ChatImage extends Component<{ picSrc?: string, online?: boolean, hideOnlineIcon?: boolean }> {
    render() {
        return (
            <div className="chat-image">
                <img src={this.props.picSrc || defaultUserPic} alt="" />
                {this.props.hideOnlineIcon ? <></> : <OnlineIndicator online={this.props.online || false} />}
            </div>
        )
    }
}
