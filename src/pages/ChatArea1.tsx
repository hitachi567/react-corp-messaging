import React from 'react';
import BackButton from '../components/BackButton';
import ChatImage from '../components/ChatImage';
import Message from '../components/Message';
import More from '../components/More';
import ChatInput from '../components/ChatInput';
import data from '../data.json';
import useChat from '../hooks/useChat';

export default function ChatArea1() {
    const roomId = '0000';
    const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    const handleNewMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

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
                {messages.map((message, i) => (
                    <li
                        key={i}
                        className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                            }`}
                    >
                        <Message userName="Lorem Ipsum" text={message.text} time={new Date().toTimeString().substring(0, 5)} picSrc={data.chat[1].userPicSrc} showInfo={false} self={false} />
                    </li>
                ))}
            </section>
            <section className="chat-input">
                <article className="input">
                    <ChatInput newMessage={newMessage} handleNewMessageChange={handleNewMessageChange} handleSendMessage={handleSendMessage} />
                </article>
            </section>
        </div>
    )
}
