import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JobList from './components/JobList/';
import JobSearchForm from './components/JobSearchForm/';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import StartPage from './pages/StartPage/StartPage';

function App() {
  return (
    <Switch>
      <Route path="/search/:id" component={DetailsPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/" component={StartPage} />
    </Switch>
  );
}

export default App;
