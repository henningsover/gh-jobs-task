import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const JobContext = createContext({});

const BASE_URL = 'https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=';

export default function JobContextProvider({ children }) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [jobList, setJobList] = useState(null);
  const history = useHistory();

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

  const submitAndLinkToSearchPage = (e) => {
    handleSubmit(e);
    history.push('/search');
  };

  return (
    <JobContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        handleSubmit,
        jobList,
        setJobList,
        submitAndLinkToSearchPage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
