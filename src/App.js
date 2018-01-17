import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from "./Home";
import userMad from "./Madlibs/userMadlibs"

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

    </Switch>
  </div>
)

export default App;
