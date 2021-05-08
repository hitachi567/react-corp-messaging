import { Component } from 'react';
import { TUser } from '../propTypes';
import Header from './Header';
import Main from './Main';

export default class App extends Component<{

}, {
    isAuthorized: boolean,
    user?: {
        name: string,
        picSrc?: string,
    }
    contactList?: TUser[],
    currentPage: number
}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isAuthorized: false,
            currentPage: 1
        }
        this.togglePage = this.togglePage.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state.currentPage);
    }

    togglePage(newCurrentPage: number) {
        this.setState({ currentPage: newCurrentPage });
    }

    render() {
        return (
            <div>
                <Header
                    pageIds={this.state.isAuthorized ? [3, 4, 5, 6] : [1, 2]}
                    currentPage={this.state.currentPage}
                    togglePage={this.togglePage}
                />
                <Main />
            </div>
        )
    }
}
