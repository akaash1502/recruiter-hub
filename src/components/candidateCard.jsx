import React from "react";
import { useNavigate } from "react-router-dom";

function CandidateCard ({ candidate }) {
    const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the candidate's profile page and pass the candidate object via state
    navigate(`/candidate-profile/${candidate.id}`, { state: { candidate } });
  };

  return (
  <div
  onClick={handleCardClick} 
  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm flex justify-between items-center mb-2" >
    <div>
      <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">{candidate.Name}</h4>
      <p className="text-gray-600 dark:text-gray-400">
        <strong>Application Date:</strong> {candidate.Application_date}
      </p>
      <a
        href={candidate.ResumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Resume
      </a>
    </div>
    <div className="text-right">
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          candidate.Status ? "bg-teal-600 text-white" : "bg-red-700 text-white"
        }`}
      >
        {candidate.Status ? "Approved" : "Pending"}
      </span>
    </div>
  </div>);
};

export default CandidateCard;
