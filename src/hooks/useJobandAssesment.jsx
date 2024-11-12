// src/hooks/useJobAndAssessment.js
import { useContext } from 'react';
import { JobContext } from '../context/jobContext';
import { AssessmentContext } from '../context/assesmentContext';

export const useJobAndAssessment = () => {
  const { jobs, addJob, deleteJob } = useContext(JobContext);
  const { assessments, createAssessment, deleteAssessment } = useContext(AssessmentContext);

  // Example function that interacts with both contexts
  const deleteJobAndAssessment = (jobId) => {
    deleteJob(jobId);
    deleteAssessment(jobId);  // Delete assessment associated with the job
  };

  return { jobs, assessments, addJob, deleteJob, createAssessment, deleteJobAndAssessment };
};
