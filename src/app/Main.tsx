import { Component } from 'react';
import Lorem from '../components/Lorem';
import Nav from '../components/Nav';

export default class Main extends Component {
    render() {
        return (
            <div className="contaner">
                <Nav isAuthorized={false} />
                {
                    
                    [11,1,1,,1,1,1,,1,1,1,1,1,1,1,1,,1,].map(() => <Lorem />)
                }
            </div>
        )
    }
}
