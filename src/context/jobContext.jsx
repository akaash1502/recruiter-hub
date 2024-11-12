// src/context/JobContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the JobContext
export const JobContext = createContext();

// JobProvider component that wraps around children components
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage on initial render
  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    console.log('Stored jobs:', storedJobs);
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  // Update localStorage whenever jobs change
  useEffect(() => {
    if (jobs.length > 0) {  // Only update localStorage if jobs are not empty
      console.log('Jobs updated:', jobs);
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
  }, [jobs]);

  // Add a new job
  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  // Delete a job by ID
  const deleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter(job => job.id !== jobId));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};



