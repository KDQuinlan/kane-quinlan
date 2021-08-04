import './styles/aboutsection.css'
import { Link } from 'react-router-dom';
import logo from '../assets/me.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const AboutSection = () => {
    return (
        <div className="infoContainer">
            <div className="headerContainer">
                <h1 style={{ fontWeight: 100 }}>Kane Quinlan</h1>
                <Link to="/">
                    <img src={logo} alt="Kane Quinlan" width="70%" height="70%" style={{ borderRadius: "15px" }} />
                </Link>
                <h3 style={{ fontWeight: 100 }}>kquinlan@protonmail.com</h3>
            </div>
            <div className="descContainer">
                <h3>Overview</h3>
                <p>Hello! This is my website to display a bit about myself, my career, my projects and how to contact me.
                    At the moment, I'm a Junior Engineer for Asda and I enjoy making projects and playing games in my spare time.</p>
            </div>
            <div className="iconList">
                <a href="https://www.linkedin.com/in/kane-longbottom-47819b1ab/"><FaLinkedin size="30px" color="#646464" /></a>
                <a href="https://github.com/KDQuinlan"><FaGithub size="30px" color="#646464" /></a>
            </div>
        </div>
    );
}

export default AboutSection;