import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  return (
    <Authenticator initialState="signUp" loginMechanisms={['email']}>
      {({ user }) => {
        if (user) {
          // Navigate to admin page after signup
          navigate('/admin');
        }
        return (
          <div>
            <h1>Sign Up Page</h1>
            <p>Create a new account.</p>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default Signup;
