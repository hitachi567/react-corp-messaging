import classNames from 'classnames';
import { Component } from 'react';
import Nav from './Nav';

export default class Header extends Component<{ isAuthorized: boolean }> {
    render() {
        return (
            <header>
                <div className={classNames({
                    contaner: true,
                    isAuthorized: this.props.isAuthorized
                })}>
                    <div className="title">
                        <h1>Corporate messaging</h1>
                    </div>
                    <Nav isAuthorized={this.props.isAuthorized} />
                </div>
            </header>
        )
    }
}
