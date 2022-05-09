import ReactDOM from 'react-dom';
import Top from './Top';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';


function App() {
    return (
        <div class="page">
            <Top />
            <Content />
            <Sidebar />
            <Footer />

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector(".root"));