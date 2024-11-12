import React , {useContext, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { CandidateContext } from "../context/candidateContext";

export default function UserProfile() {
    const location = useLocation();
    const { candidate } = location.state;
    const { updateCandidateStatus } = useContext(CandidateContext);


    if (!candidate) {
        return <div>No candidate data available</div>; // In case no candidate data is passed
    }

    const handleStatusChange = (newStatus) => {
      updateCandidateStatus(candidate.id, newStatus);
      candidate.Status = newStatus;
    };

    return (
      <div className="bg-[#111827]">
        {/* Page Partials: User Profile: With Cards */}
        <div className="dark:text-gray-100 p-4">
          {/* Banner */}
          <div className="w-[75%] m-auto bg-gradient-to-r from-teal-400 to-purple-500 p-6 text-center">

            <div className="mb-5 inline-block">
              <div className="rounded-full bg-white/50 p-2">
                <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg"
                  alt="User Avatar"
                  className="inline-block size-20 rounded-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{candidate.Name}</h3>
            <h4 className="text-sm font-medium text-white/90">UI Designer</h4>
          </div>
          {/* END Banner */}

          {/* Vital Info */}
          <div className=" w-[75%] m-auto flex flex-col overflow-hidden bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
            <div className="grow p-5 md:flex lg:p-8">
              <div className="mb-5 border-b border-gray-200 md:mb-0 md:w-1/3 md:flex-none md:border-0 dark:border-gray-700">
                {/* Skills Section */}
                <div>
                  <h2 className="font-medium text-gray-200 mb-2 text-xl">Skills</h2>
                  <ul className="list-disc pl-5 text-gray-400 text-lg">
                    {candidate.Skills && candidate.Skills.length > 0 ? (
                      candidate.Skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    ) : (
                      <li>No skills listed</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-24">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6 xl:w-2/3"
                >
                  <div className="space-y-1 space-x-2">
                    <label className="font-medium">Resume</label>
                    <a
                      href={candidate.ResumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500"
                    >
                      View Resume
                    </a>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="username" className="font-medium">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={candidate.Name} // Pre-fill with the candidate's name
                      className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                      readOnly
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="application_date" className="font-medium">
                      Contact Details
                    </label>
                    <input
                      type="text"
                      id="application_date"
                      name="application_date"
                      value={candidate.Contact_details} // Format application date
                      className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                      readOnly
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="application_date" className="font-medium">
                      Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={candidate.Experience + ' Years '}  // Format application date
                      className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                      readOnly
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="status" className="font-medium">
                      Status
                    </label>
                    <input
                      type="text"
                      id="status"
                      name="status"
                      value={candidate.Status ? "Interview Scheduled" : "Under Review"} // Display status
                      className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-teal-500"
                      readOnly
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => handleStatusChange(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400/90"
                  >
                    Approve
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleStatusChange(false)}
                    className="inline-flex m-6 items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400/50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400/90"
                  >
                    Remove
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* END Vital Info */}
        </div>
      </div>
    );
}
