import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}> 
      <Switch location={location}>
        <Route  path="/" exact component={Home}/>
        <Route  path="/a-propos" component={About}/>
        <Route  path="/skills" component={Skills}/>
        <Route  path="/portfolio" component={Portfolio}/>
        <Route  path="/contact" component={Contact}/>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
))

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className ="MainContent">
          <AnimatedSwitch />
        </div> 
      </div>
    </Router>
  );
}

export default App;
