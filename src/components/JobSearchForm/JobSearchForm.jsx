import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';

export default function JobSearchForm({ handleSubmit }) {
  const { searchInputValue, setSearchInputValue } = useContext(JobContext);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)}></input>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
