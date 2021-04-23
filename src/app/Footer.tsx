import { Component } from 'react';
import Nav from '../components/Nav';

export default class Footer extends Component {
    render() {
        return (
            <div className="contaner">
                <Nav isAuthorized={true}/>
            </div>
        )
    }
}
