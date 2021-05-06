import { Component } from 'react';
import classNames from 'classnames';
import { TPage } from '../propTypes';

const pages: TPage[][] = [
    [
        {
            view: 'Feed',
            path: '/feed',
            icon: <span className="material-icons icon">article</span>
        },
        {
            view: 'Messages',
            path: '/messages',
            icon: <span className="fas fa-comments icon"></span>
        },
        {
            view: 'Groups',
            path: '/groups',
            icon: <span className="material-icons icon">group</span>

        },
        {
            view: 'Profile',
            path: '/profile',
            icon: <span className="material-icons icon">account_box</span>
        }
    ],
    [
        {
            view: 'Sign in',
            path: '/sign-in',
            icon: <i className="fas fa-sign-in-alt"></i>
        },
        {
            view: 'Sign up',
            path: '/sign-up',
            icon: <i className="fas fa-user-plus"></i>
        }
    ]
];

export default class Nav extends Component<{ isAuthorized: boolean, current?: string }> {
    render() {
        const i = this.props.isAuthorized ? 0 : 1;
        return (
            <nav>
                <ul className={classNames({
                    around: this.props.isAuthorized,
                    end: !this.props.isAuthorized
                })}>
                    {pages[i].map(value => (
                        <li key={value.path.substring(1)}>
                            <button>{value.icon || ''}<span className="text">{value.view}</span></button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
