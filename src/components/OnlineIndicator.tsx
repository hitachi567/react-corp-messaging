import { Component } from 'react';
import classNames from 'classnames';

export default class OnlineIndicator extends Component<{ online: boolean }> {
    render() {
        return (
            <div className="online-indicator">
                <div className={classNames({
                    online: this.props.online,
                    offline: !this.props.online
                })} />
            </div >
        )
    }
}
