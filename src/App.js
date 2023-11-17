import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/login';
import CreateUser from './pages/CreateUser';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/CreateAdmin' element={ <CreateUser />} />
          <Route path='/Login' element={ <Login />} />
          <Route path='/Reset' element={ <ResetPassword />} />
        </Routes>
      </BrowserRouter>

      {/* <Login/> */}

    </div>
  );
}

export default App;
