import './App.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AddNewCourse from './pages/AddNewCourse';
import Tutors from './pages/Tutors';
import TutorApplications from './pages/TutorApplications';
import Subscribers from './pages/Subscribers';
import AdminManagement from './pages/AdminManagement';
import AdminProfile from './pages/AdminProfile';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import { useAuthContext } from './context/authContext';

import { Route, Routes, Navigate } from 'react-router-dom';
import MainContainerLayout from './Components/layouts/MainContainerLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const { isAuthenticated, } = useAuthContext();

  // if (isAuthenticated === undefined) return;

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    )
  } else {
    return (
      <MainContainerLayout>
        <Routes>
          <Route path="/" element={<ProtectedRoute component={Home} />} />
          <Route path="courses" element={<ProtectedRoute component={Courses} />} />
          <Route path="add-new-course" element={<ProtectedRoute component={AddNewCourse} />} />
          <Route path="tutors" element={<ProtectedRoute component={Tutors} />} />
          <Route path="tutor-applications" element={<ProtectedRoute component={TutorApplications} />} />
          <Route path="subscribers" element={<ProtectedRoute component={Subscribers} />} />
          <Route path="admin-management" element={<ProtectedRoute component={AdminManagement} />} />
          <Route path="admin-profile" element={<AdminProfile />} />
        </Routes>
      </MainContainerLayout>
    );
  }
}

export default App;
