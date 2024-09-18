import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import AdminDashboard from './AdminDashboard';
import Login from './pages/Login';  
import Signup from './pages/Signup'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/admin" 
          element={
            <Authenticator>
              {({ signOut, user }) => (
                <AdminDashboard user={user} signOut={signOut} />
              )}
            </Authenticator>
          } 
        />
        <Route path="*" element={<Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );
}

export default App;
