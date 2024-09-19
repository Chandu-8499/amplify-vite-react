import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Auth } from '@aws-amplify/auth'; 
import { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { CognitoUser } from 'amazon-cognito-identity-js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

function ProtectedRoute() {
  const [userGroup, setUserGroup] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        const groups: string[] = user.getSignInUserSession()?.getAccessToken()?.payload['cognito:groups'] || [];
        if (groups.includes('Admin')) {
          setUserGroup('Admin');
          navigate('/admin');
        } else {
          setUserGroup('User');
          navigate('/user');
        }
      })
      .catch((err: Error) => {
        console.error(err);
        navigate('/login');
      });
  }, [navigate]);

  return (
    <div>
      {userGroup === 'Admin' && <p>Welcome, Admin!</p>}
      {userGroup === 'User' && <p>Welcome, User!</p>}
    </div>
  );
}
