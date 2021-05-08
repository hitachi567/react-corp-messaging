import { TPage } from "../propTypes";

export const pages: TPage[] = [
    {
        id: 0,
        name: 'Home',
        accessAllowed: true
    },
    {
        id: 1,
        name: 'SignIn',
        view: 'Sign in',
        icon: <i className="fas fa-sign-in-alt icon"></i>,
        accessAllowed: true
    },
    {
        id: 2,
        name: 'SignUp',
        view: 'Sign up',
        icon: <i className="fas fa-user-plus icon"></i>,
        accessAllowed: false
    },
    {
        id: 3,
        name: 'ChatList',
        view: 'Contacts',
        icon: <span className="material-icons icon">group</span>,
        accessAllowed: true
    },
    {
        id: 4,
        name: 'ChatArea',
        view: 'Messages',
        icon: <span className="fas fa-comments icon"></span>,
        accessAllowed: true
    },
    {
        id: 5,
        name: 'Feed',
        view: 'Feed',
        icon: <span className="material-icons icon">article</span>,
        accessAllowed: false
    },
    {
        id: 6,
        name: 'Profile',
        view: 'Profile',
        icon: <span className="material-icons icon">account_box</span>,
        accessAllowed: false
    }
];