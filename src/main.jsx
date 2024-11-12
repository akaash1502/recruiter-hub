import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobProvider } from './context/jobContext.jsx'
import { CandidateProvider } from './context/candidateContext.jsx'
import { AssessmentProvider } from './context/assesmentContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <JobProvider>
      <AssessmentProvider>
        <CandidateProvider> 
          <App />
        </CandidateProvider>
      </AssessmentProvider>
      </JobProvider>
  </StrictMode>,
)
