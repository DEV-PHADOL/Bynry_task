import { Route, Routes } from 'react-router-dom';
import Profiles from './pages/profiles';
import './App.css'
import ProfileDashboard from './pages/dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profiles />} />
      <Route path="/dashboard" element={<ProfileDashboard />} />
    </Routes>
  );
}

export default App
