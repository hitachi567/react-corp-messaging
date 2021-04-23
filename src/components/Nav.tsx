import { Component } from 'react'

const buttons = [
    [
        'Feed', 'Messages', 'Groups', 'Profile'
    ], [
        'Sign in', 'Sign up'
    ]
]

export default class Nav extends Component<{ isAuthorized: boolean }> {
    render() {
        return (
            <nav>
                <ul className="zero">
                    {
                        buttons[this.props.isAuthorized ? 0 : 1]
                            .map(value => <li><button>{value}</button></li>)
                    }
                </ul>
            </nav>
        )
    }
}
