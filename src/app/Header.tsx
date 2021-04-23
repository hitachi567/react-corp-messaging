import { Component } from 'react';
import Nav from '../components/Nav';

export default class Header extends Component {
    render() {
        return (
            <div className="contaner">
                <h1 className="click">Corporate messaging</h1>
                <Nav isAuthorized={true}/>
            </div>
        )
    }
}


/* 

// import { TPage } from '../classes/Page';
import { THeader } from './PropsTypes';
type State = { toggleMenu: boolean }

export default class Header extends Component<THeader, State> {
    constructor(props: THeader) {
        super(props);
        this.state = {
            toggleMenu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state.toggleMenu);
    }

    toggleMenu() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        });
    }

    render() {
        return (
            <div className="contaner flex">
                <h1 className="duration" onClick={() => console.log('hello')}>Corporate messaging</h1>
                <div className="flex">
                    <span className="humburger flex">
                        <button className="duration humburger" onClick={this.toggleMenu}>≡</button>
                    </span>
                    <nav>
                        <ul className="zero">
                            {
                                this.props.pages.map(value => {
                                    let classes = 'duration button-nav';
                                    if (value.isCurrent) {
                                        classes += ' current'
                                    }
                                    return (<li className="inline">
                                        <button className={classes}>{value.name}</button>
                                    </li>);
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
 */