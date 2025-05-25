'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  const handleFilter = (filtered) => {
    setFilteredJobs(filtered);
  };

  return (
    <>
      <Header />
      <main className="container">
        <SearchForm jobs={jobs} onFilter={handleFilter} />
        {selectedJob
          ? <JobDetails job={selectedJob} />
          : <JobList jobs={filteredJobs} onSelect={setSelectedJob} />}
      </main>
    </>
  );
}