import React from 'react';
import Message from '../components/Message';
import ChatInput from '../components/ChatInput';
import useChat from '../hooks/useChat';
import ChatProfile from '../components/ChatProfile';

export default function ChatArea(props: {
    picSrc: string,
    chatName: string,
    chatInfo: string,
    backEvent: () => {},
}) {
    // const roomId = '0000';
    // const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
    // const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    // const handleNewMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setNewMessage(event.target.value);
    // };

    // const handleSendMessage = () => {
    //     sendMessage(newMessage);
    //     setNewMessage("");
    // };

    return (
        <div className="page chat-area">
            <ChatProfile
                name={props.chatName}
                info={props.chatInfo}
                picSrc={props.picSrc}
                backEvent={props.backEvent}
                moreEvent={() => { }}
            />
            <section className="chat-output">
                {/* {messages.map((message, i) => (
                    <Message                          
                        userName={message.ownedByCurrentUser ? "You" : props.chatName}
                        text={message.text}
                        time={new Date().toTimeString().substring(0, 5)}
                        picSrc={message.ownedByCurrentUser ? undefined : props.picSrc}
                        showInfo={false}
                        self={message.ownedByCurrentUser}
                    />
                ))} */}
            </section>
            <ChatInput />
        </div>
    )
}
