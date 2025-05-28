
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={isAuthenticated() ? "/dashboard" : "/login"} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
