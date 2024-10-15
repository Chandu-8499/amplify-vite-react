import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

function Signup() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          {user ? (
            <>
              <h1>Welcome {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      )}
    </Authenticator>
  );
}

export default Signup;
