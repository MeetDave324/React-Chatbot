import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import Home from './Home';
import Cancer from './Cancer';

function App() {
  return (


    

    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cancer">Cancer</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
       <Route path="/cancer">
          <Cancer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
