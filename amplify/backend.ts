import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
// import { data } from './data/resource';
// import { storage } from './storage/resource';
// import { addUserToDB } from './functions/add-user/resource';

defineBackend({
  auth,
  
});

// defineBackend({ 
//   auth: {
//     cognito: {
//       triggers: {
//         PostConfirmation: addUserToDB,  // Trigger function after user confirmation
//       },
//     },
//   },
//   data,
//   storage
// });
