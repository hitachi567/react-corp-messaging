import classNames from 'classnames';
import { Component } from 'react';
import { pages } from '../pages/pages';


export default class Header extends Component<{
    pageIds: number[],
    currentPage: number,
    togglePage: (newCurrentPage: number) => void
}> {
    render() {
        return (
            <header>
                <div className="contaner">
                    <div className="title">
                        <h1>Corporate messaging</h1>
                    </div>
                    <nav>
                        <ul className="zero">
                            {
                                this.props.pageIds.map(value => {
                                    return (
                                        <li key={pages[value].name} >
                                            <button
                                                className={classNames({ current: value === this.props.currentPage })}
                                                onClick={() => this.props.togglePage(value)}
                                            >
                                                {pages[value].icon || ''}
                                                <span className="text">{pages[value].view}</span>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav >
                </div>
            </header>
        )
    }
}
