import { Component } from 'react';

type ThisProps = {
    text: string
}

export default class Button extends Component<ThisProps> {

    render() {
        return (
            <div>
                <button className="button">{this.props.text}</button>
            </div>
        )
    }
}
