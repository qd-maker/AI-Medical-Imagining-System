import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PatientList from './pages/PatientList';
import MedicalRecords from './pages/MedicalRecords';
import ImagingUpload from './pages/ImagingUpload';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/patients" replace />} />
          <Route path="patients" element={<PatientList />} />
          <Route path="medical-records" element={<MedicalRecords />} />
          <Route path="imaging" element={<ImagingUpload />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 