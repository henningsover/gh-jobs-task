import React from 'react';
import JobList from './components/JobList/';
import JobSearchForm from './components/JobSearchForm/';

function App() {
  return (
    <div>
      <h1>Halloj</h1>
      <JobSearchForm />
      <JobList />
    </div>
  );
}

export default App;
