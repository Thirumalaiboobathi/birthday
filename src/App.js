import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/logn'
import Sidebar from './component/common/Sidebar';
import AvailableAdvertisements from './pages/AdvertisementDashboard';
import Dashboard from './pages/Dashboard';
import Aboutus from './pages/login/aboutus';
import SignIn from './pages/login/sigin';
import SignUp from './pages/login/singup';
import Declaration from './pages/persoaldetails/declaration';
import BusinessInfo from './pages/persoaldetails/bussessnfo';
import LocationDetails from './pages/persoaldetails/locationInfo';
import PersonalInfo from './pages/persoaldetails/persoalinfo';
import DocumentUpload from './pages/persoaldetails/documentUpload';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
       
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/availableAdvertisements" element={<AvailableAdvertisements />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/business-info" element={<BusinessInfo />} />
            <Route path="/location-details" element={<LocationDetails />} />
            <Route path="/document-upload" element={<DocumentUpload />} />
            <Route path="/declaration" element={<Declaration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
