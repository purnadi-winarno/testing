import React from 'react';
import Home from "./screens/Home"
import User from "./screens/User"
import { Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:user" component={User} />
      </Switch>

    </div>
  );
}

export default App;
