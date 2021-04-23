import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import '../styles/index.css';
import '../styles/utils.css';
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Main.css';

class App extends Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Main />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
}

export default App;
