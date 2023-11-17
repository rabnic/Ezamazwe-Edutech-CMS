import './App.css';
import { Box } from '@mui/material';
import { useState } from 'react';
import SideNavigation from './Components/navigation/SideNavigation';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AddNewCourse from './pages/AddNewCourse';
import Tutors from './pages/Tutors';
import TutorApplications from './pages/TutorApplications';
import Subscribers from './pages/Subscribers';
import AdminManagement from './pages/AdminManagement';
import AdminProfile from './pages/AdminProfile';
import SignIn from './pages/SignIn';
import ResetPassword from  './pages/ResetPassword';
import TopAppBar from './Components/TopAppBar';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
  }

  // return (
  //   <Routes>
  //     <Route index element={<SignIn />} />
  //     <Route path='ResetPassword' element={<ResetPassword />} />

  //   </Routes>
  // )

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }} style={{ maxHeight: '100vh', overflow: "hidden" }}>

      <Box sx={{ width: "270px", height: "100vh" }}>
        <SideNavigation />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flex: "2", flexDirection: "column", padding: "15px", paddingTop: "0px" }} >
        <Box sx={{ width: "100%", height: "100px", display: "flex", flexDirection: "row" }}>
          <TopAppBar />
        </Box>
        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", paddingTop: "15px" }} style={{ overflow: 'scroll' }}>
          <Routes>
            <Route index element={<SignIn />} />
            <Route path="Home" element={<Home />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="AddNewCourse" element={<AddNewCourse />} />
            <Route path="Tutors" element={<Tutors />} />
            <Route path="TutorApplications" element={<TutorApplications />} />
            <Route path="Subscribers" element={<Subscribers />} />
            <Route path="AdminManagement" element={<AdminManagement />} />
            <Route path="AdminProfile" element={<AdminProfile />} />
          </Routes>
        </Box>
      </Box>
    </Box>

  );
}

export default App;
