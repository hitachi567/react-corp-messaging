import { Component } from 'react';
// import ComingSoon from '../pages/ComingSoon';
import ChatList from '../pages/ChatList';
// import Home from '../pages/Home';
// import { TChatContent } from '../propTypes';

import data from '../data.json';
import ChatArea1 from '../pages/ChatArea1';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="contaner">
                    {/* <ChatList chatList={data.chat} /> */}
                    {/* <ChatArea1 /> */}
                    {/* <ComingSoon /> */}
                </div>
            </main>
        )
    }
}
