import { Authenticator } from '@aws-amplify/ui-react';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <AdminDashboard 
          user={user} // Passing user object
          signOut={signOut} // Passing signOut function
        />
      )}
    </Authenticator>
  );
}

export default App;
