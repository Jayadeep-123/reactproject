import React from 'react';
import EditForm from './components/viewModel';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import DashBoard from './components/Table';
import AddNewField from './components/AddNewField';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  
      <div>
        <Sidebar />
        <Topbar />

        <Routes>
          <Route path="/" element={<Sidebar/>} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/edit" element={<EditForm />} />
          <Route path="/add" element={<AddNewField />} />
        </Routes>
      </div>
    
  );
};

export default App;
