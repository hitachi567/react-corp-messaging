import { Component } from 'react';
import BackButton from '../components/BackButton';
import ChatImage from '../components/ChatImage';
import Message from '../components/Message';
import More from '../components/More';
import ChatInput from '../components/ChatInput';
import data from '../data.json';
const msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id mollitia asperiores dicta, beatae suscipit praesentium magni eius harum laboriosam iure vel. Modi quas labore esse dicta incidunt quam non provident perferendis. Earum nisi aut laboriosam, veritatis, dolorem ut corporis unde ullam id itaque temporibus. Perferendis vitae quae accusantium natus?";

export default class ChatArea extends Component {
    render() {
        return (
            <div className="page chat-area">
                <section className="chat-profile">
                    <article>
                        <BackButton />
                        <ChatImage hideOnlineIcon={true} />
                        <div className="title">
                            <div className="name">Lorem Ipsum</div>
                            <div className="info">Last seen recently</div>
                        </div>
                        <More />
                    </article>
                </section>
                <section className="chat-output">
                    <Message userName="Lorem Ipsum" text={msg} time={new Date().toTimeString().substring(0, 5)} picSrc={data.chat[1].userPicSrc} showInfo={false} self={false} />
                    <Message userName="Lorem Ipsum" text={msg} time={new Date().toTimeString().substring(0, 5)} picSrc={data.chat[1].userPicSrc} showInfo={false} self={false} />
                    <Message userName="Lorem Ipsum" text={msg} time={new Date().toTimeString().substring(0, 5)} picSrc={data.chat[1].userPicSrc} showInfo={false} self={true} />
                    <Message userName="Lorem Ipsum" text={msg} time={new Date().toTimeString().substring(0, 5)} picSrc={data.chat[1].userPicSrc} showInfo={false} self={false} />
                </section>
                <section className="chat-input">
                    <article className="input">
                        <ChatInput />
                    </article>
                </section>
            </div>
        )
    }
}

