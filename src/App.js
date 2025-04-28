import React from 'react';
import EditForm from './components/viewModel';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import DashBoard from './components/Table';
import AddNewField from './components/AddNewField';
const App = () => {
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <DashBoard/>
      {/* <EditForm/> */}
        {/* <AddNewField/> */}
      
    </div>
  );
};
 
export default App;

