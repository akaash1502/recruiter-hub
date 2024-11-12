import { useNavigate, Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { JobContext } from "../context/jobContext";
import { AssessmentContext } from "../context/assesmentContext";

const AssessmentList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [jobId, setJobId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { jobs } = useContext(JobContext);
  const { assessments } = useContext(AssessmentContext);

  // Find jobs that don't already have an assessment
  const jobsWithoutAssessment = jobs.filter(
    (job) => !assessments.some((assessment) => assessment.jobId === job.id)
  );

  const handleAddButtonClick = () => {
    setShowPopup(true);
    setErrorMessage(''); // Reset error message when popup opens
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setJobId('');
  };

  const handleSubmit = () => {
    const job = jobsWithoutAssessment.find((job) => job.id === jobId);
    if (job) {
      // Navigate to the assessment page and pass job.title in the state
      navigate(`/assessment/${jobId}`, { state: { jobTitle: job.title } });
    } else {
      setErrorMessage('Job not found');
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center p-4 relative">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Assessments</h1>
      <div className="max-w-4xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((assessment) => {
          const job = jobs.find((job) => job.id === assessment.jobId);
          return (<Link
            to={`/assessment/${assessment.jobId}`}
            key={assessment.jobId}
            state={{ jobTitle: job ? job.title : "Job Not Found" }}
            className="block bg-white rounded-lg shadow-lg p-6 text-center transform transition hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-700">{job ? job.title : "Job Not Found"}</h2>
          </Link>);
        })}
      </div>

      {/* Fixed "+" button in the bottom-right corner */}
      <button
        onClick={handleAddButtonClick}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg text-3xl hover:bg-blue-700 transition"
      >
        +
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Enter Job ID</h2>
            <select
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="" disabled>Select Job ID</option>
              {jobsWithoutAssessment.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentList;
