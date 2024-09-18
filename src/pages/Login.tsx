import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <Authenticator loginMechanisms={['email']} signUpAttributes={['email']}>
      {({ user }) => {
        if (user) {
          // Navigate to admin page after login
          navigate('/admin');
        }
        return (
          <div>
            <h1>Login Page</h1>
            <p>Please sign in to continue.</p>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default Login;
