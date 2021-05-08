import { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="page home">
                <section className="header">
                    <article className="title">
                        <h1>Corporate messaging</h1>
                        <div>Business at hand</div>

                    </article>
                    <article className="buttons">
                        <div className="col1">
                            <button>Get started...</button>
                            <button>Sign up</button>
                        </div>
                        <div className="col2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore maxime eius qui, assumenda mollitia necessitatibus harum accusamus commodi nobis quas ullam nihil molestias vel ducimus cupiditate a asperiores reprehenderit.</p>
                            <img src="" alt="" />
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}
