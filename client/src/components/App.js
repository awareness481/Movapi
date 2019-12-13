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
import TitlePage from './TitlePage';

import '../styles/_main.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <SearchForm />
          </Route>
          <Route exact path='/:query' children={<SearchResults />} />
          <Route path='/title/:title' children={<TitlePage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
