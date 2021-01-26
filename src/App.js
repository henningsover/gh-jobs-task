import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Switch>
      <Route path="/search/:id" component={DetailsPage} />
      <Route path="/" component={SearchPage} />
    </Switch>
  );
}

export default App;
