
import React, { createContext, useState, useEffect } from "react";

// Create a Context for candidates
const CandidateContext = createContext();

// Provider component to manage candidate data
const CandidateProvider = ({ children }) => {
  // Initialize candidates state from localStorage or default to empty array
    const [candidates, setCandidates] = useState(() => {
        const savedCandidates = localStorage.getItem("candidates");
        const temp = JSON.parse(savedCandidates)
        console.log(temp);
        return temp?temp:[];
    });

    // Save candidates to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("candidates", JSON.stringify(candidates));
    }, [candidates]);

    // Function to update candidate status
    const updateCandidateStatus = (candidateId, status) => {
    const updatedCandidates = candidates.map((candidate) =>
      candidate.id === candidateId
        ? { ...candidate, Status: status }
        : candidate
    );
    setCandidates(updatedCandidates);
    console.log(candidateId, status);
  };

  return (
    <CandidateContext.Provider value={{ candidates, updateCandidateStatus }}>
      {children}
    </CandidateContext.Provider>
  );
};

export { CandidateContext, CandidateProvider };
