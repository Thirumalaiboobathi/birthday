import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './component/common/Sidebar';
import AvailableAdvertisements from './component/AdvertisementDashboard';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
       
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<AvailableAdvertisements />} />
            <Route path="/dashboard" element={<Dashboard />} />
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
