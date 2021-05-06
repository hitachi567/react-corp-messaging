export type TChatContent = {
    userPicSrc?: string;
    chatName: string;
    countNewMessages: number;
    online: boolean;
    lastMessage: {
        date: string;
        text: string;
    };
}

export type TPage = {
    view: string,
    path: string,
    icon?: JSX.Element
}