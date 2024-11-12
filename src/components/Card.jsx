import React, { useState , useContext} from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"; // Import the Chevron icons
import CandidateCard from "./candidateCard";
import { CandidateContext } from "../context/candidateContext";


const JobCard = ({ job, isExpanded, handleCardClick, handleDelete }) => {

  const { candidates, updateCandidateStatus } = useContext(CandidateContext);

  // Filter candidate data based on the job's candidate IDs
  const jobCandidates = candidates.filter((candidate) =>
    job.totalCandidatesApplied.includes(candidate.id)
  );

  const handleStatusChange = (candidateId, newStatus) => {
    // Update the candidate's status
    updateCandidateStatus(candidateId, newStatus);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow hover:shadow-md transition-shadow duration-200">
      {/* Job details section */}
      <div className="flex justify-between items-center cursor-pointer " onClick={handleCardClick}>
        {/* Chevron icon placed on the leftmost side */}
        <div className="flex items-center pr-5">
          {isExpanded ? (
            <ChevronDown className="text-gray-500 dark:text-gray-300" />
          ) : (
            <ChevronRight className="text-gray-500 dark:text-gray-300" />
          )}
        </div>

        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{job.title}</h3>
          {job.description ? (
            <p className="text-gray-600 dark:text-gray-400 mb-2">{job.description}</p>
          ) : (
            <p className="text-gray-400 italic mb-2">No description available</p>
          )}
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Candidates Applied:</strong> {job.totalCandidatesApplied.length}
          </p>
        </div>

        {/* Delete button */}
        <button
          onClick={(e) => { 
            e.stopPropagation();
            handleDelete(job.id);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-semibold leading-5 text-gray-300 hover:border-gray-600 hover:text-gray-200 hover:shadow-sm focus:ring focus:ring-gray-600/40 active:border-gray-700 active:shadow-none"
        >
          Delete
        </button>
      </div>

      {/* Expandable Candidate List */}
      {isExpanded && (
        <div className="mt-4 border-t border-gray-300 dark:border-gray-700 pt-4">
          <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Candidates:</h4>
          {jobCandidates.length > 0 ? (
            <ul className="space-y-2">
              {jobCandidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate}  />
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 italic">No candidates applied yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobCard;


