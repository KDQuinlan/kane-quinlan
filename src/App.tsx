import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/home'
import About from './pages/about'
import CV from './pages/cv'
import Projects from './pages/projects'
import Contact from './pages/contact'
import NotFound from './pages/notfound'
import Navbar from './components/navbar';
import AboutSection from './components/aboutsection';

const App = () => {
  return (
    <Router>
      <div className="parent">
        <Navbar />
        <div className="screen">
          <div className="contentContainer">
            <AboutSection />
            <div className="pageContainer">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/cv" component={CV} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
