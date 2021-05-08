import { Component } from 'react';

export default class Nav extends Component<{
    pageIds: number[],
    currentPage?: number,
    togglePage: (newCurrentPage: number) => void
}> {
    render() {
        return (
            <></>
        );
    }
}
