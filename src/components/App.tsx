import { Component } from 'react';
import Header from './Header';
import Main from './Main';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header isAuthorized={true} />
                <Main />
            </div>
        )
    }
}
