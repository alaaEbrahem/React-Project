import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import AuthorProfile from './components/AuthorProfile/AuthorProfile';
import Books from '../src/components/Books/Books';
export const myContext = React.createContext({ data: [] });

const App = (props) => (

  <Router><>
      <Switch>
          <Route exact path="/author" component={AuthorProfile} />
          <Route exact path="/books" component={Books} />
      </Switch></>
  </Router>

);

export default App;
