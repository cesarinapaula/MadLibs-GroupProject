import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from "./Home";
import userMad from "./Madlibs/userMadlibs";
import RandomMadLibs from "./Madlibs/RandomMadLibs";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> |
      {' '}
      <Link to="/random">Random MadLibs</Link> |
      {' '}
      <Link to="/create">Create Your Own Madlib</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={userMad} />
      <Route path="/random" component={RandomMadLibs} />

    </Switch>
    
  </div>
)

const myLogo = () => (
  <div>
    <Img src={'https://static1.squarespace.com/static/55ec9d8fe4b08810efbebbdf/t/5a15b315652dea2e1abd060a/1511371553356/madlibs1.jpg'} 
                      decode={false}/>
  </div>
)

export default App;
