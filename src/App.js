import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/logn'
import Sidebar from './component/common/Sidebar';
import AvailableAdvertisements from './pages/AdvertisementDashboard';
import Dashboard from './pages/Dashboard';
import Aboutus from './pages/login/aboutus';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
       
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/availableAdvertisements" element={<AvailableAdvertisements />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
