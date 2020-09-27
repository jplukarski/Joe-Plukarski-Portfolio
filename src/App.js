import React from 'react';
import Home from './pages/home/home'
import About from './pages/about/about'
import Projects from './pages/projects/projects'
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import './app.css'

const App = props => {
  const {location} = props
  const currentKey = location.pathname.split("/")[1] || "/"
  console.log(currentKey)
  return (
    <>
      <Router>
        {/* <Route render={({location})=>( */}
          <TransitionGroup>
          <CSSTransition
          key={currentKey}
          timeout={1000}
          className="fade"
          >
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/projects" component={Projects}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        {/* )}/> */}
        </Router>
    </>
  );
}

export default App;
