import React, { useContext } from 'react';
import { JobContext } from '../../contexts/JobContextProvider';

export default function JobSearchForm({ handleSubmit }) {
  const { searchInputValue, setSearchInputValue } = useContext(JobContext);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={searchInputValue.replace(/\s/g, '+')}
          onChange={(e) => setSearchInputValue(e.target.value.replace(/\s/g, '+'))}
        ></input>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
