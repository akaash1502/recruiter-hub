// import './App.css'
import Dashboard from './views/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './views/profile';
import AssessmentList from './views/assements';
import AssessmentDetail from './views/assements_details';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/candidate-profile/:id" element={<UserProfile />} />
        <Route path="/assementlist" element={<AssessmentList />} />
        <Route path="/assessment/:jobId" element={<AssessmentDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
