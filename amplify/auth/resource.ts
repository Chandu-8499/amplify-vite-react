import { defineAuth } from '@aws-amplify/backend';
// import { postConfirmation as postConfirmationFunction } from '../functions/post-confirmation/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  // access: (allow) => [
  //   allow.resource(postConfirmationFunction).to(["createUser"])
  // ],
  // triggers: {
  //   postConfirmation: postConfirmationFunction,
  // },
});