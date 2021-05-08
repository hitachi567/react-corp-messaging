import { Component } from 'react'
import { TChatContent } from '../propTypes';
import Search from '../components/Search';
import ChatContent from '../components/ChatContent';

export default class ChatList extends Component<{ chatList: TChatContent[] }> {
    render() {
        const chatList = this.props.chatList;
        return (
            <div className="page chat-list">
                <section className="search">
                    <article>
                        <Search />
                    </article>
                </section>
                <section className="chat-list">
                    {chatList.map(data => <ChatContent data={data} />)}
                </section>
            </div>
        )
    }
}
