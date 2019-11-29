import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// COMPONENTS
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import '../styles/_main.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <SearchForm />
          </Route>
          <Route path='/:query' children={<SearchResults />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
