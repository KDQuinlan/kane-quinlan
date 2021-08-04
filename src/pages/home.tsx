import './styles/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pagesContainer">
            <div className="pageTitleContainer">
                <h1 style={{ transform: "translate(0%, 40%)" }}>Welcome</h1>
            </div>
            <div className="pageContentContainer">
                <p>
                    Welcome to my personal website. You can use this to check out
                    <Link to="/about" className="navButton"> about me</Link>, <Link to="/projects" className="navButton">my projects</Link>,
                    <Link to="/CV" className="navButton"> my CV</Link> and <Link to="/contact" className="navButton">contact me</Link>.
                    If you have any UX or code improvement suggestions, please contact me. You can see the source code
                    <a href="google.com" className="navButton"> here!</a>
                </p>
            </div>
        </div>
    );
}

export default Home;