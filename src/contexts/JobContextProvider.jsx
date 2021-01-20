import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext({});

const BASE_URL = 'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=';

export default function JobContextProvider({ children }) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [jobList, setJobList] = useState(null);

  const fetchJobs = (searchValue) => {
    const url = `${BASE_URL}${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobList(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transformedSearchValue = searchInputValue.replace(/\s/g, '+');
    fetchJobs(transformedSearchValue);
  };

  return (
    <JobContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        handleSubmit,
        jobList,
        setJobList,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
