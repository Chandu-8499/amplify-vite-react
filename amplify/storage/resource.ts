import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'Ecommerce application storage',
    access: (allow) => ({
      'product-pictures/*': [
        allow.guest.to(['read','write']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'picture-submissions/*': [
        allow.authenticated.to(['read','write']),
        allow.guest.to(['read', 'write'])
      ],
    })
  });