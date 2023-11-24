import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/login';
import CreateUser from './pages/CreateUser';
import ResetPassword from './pages/ResetPassword';
import UploaCourse from './pages/uploadCourse';
import VideoEditor from './pages/videoEditor';
import VideoUploader from './pages/videoEditor';
import { getCategoryData, getSingleDocument } from './services/firebase';



function App() {

  getCategoryData()
  // getSingleDocument()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/CreateAdmin' element={ <CreateUser />} />
          <Route path='/Login' element={ <Login />} />
          <Route path='/Reset' element={ <ResetPassword />} />
          <Route path='/upload' element={ <UploaCourse />} />
          <Route path='/Edit' element={ <VideoUploader />} />
        </Routes>
      </BrowserRouter>

      {/* <Login/> */}

    </div>
  );
}

export default App;
