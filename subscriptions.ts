/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCart = /* GraphQL */ `subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
  onCreateCart(filter: $filter) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onCreateCartItem = /* GraphQL */ `subscription OnCreateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onCreateCartItem(filter: $filter) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartItemSubscriptionVariables,
  APITypes.OnCreateCartItemSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    createdAt
    description
    id
    image
    name
    price
    stock
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onCreateToDo = /* GraphQL */ `subscription OnCreateToDo($filter: ModelSubscriptionToDoFilterInput) {
  onCreateToDo(filter: $filter) {
    createdAt
    description
    id
    image
    name
    price
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateToDoSubscriptionVariables,
  APITypes.OnCreateToDoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    createdAt
    email
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
  onDeleteCart(filter: $filter) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
export const onDeleteCartItem = /* GraphQL */ `subscription OnDeleteCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onDeleteCartItem(filter: $filter) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartItemSubscriptionVariables,
  APITypes.OnDeleteCartItemSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    createdAt
    description
    id
    image
    name
    price
    stock
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onDeleteToDo = /* GraphQL */ `subscription OnDeleteToDo($filter: ModelSubscriptionToDoFilterInput) {
  onDeleteToDo(filter: $filter) {
    createdAt
    description
    id
    image
    name
    price
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteToDoSubscriptionVariables,
  APITypes.OnDeleteToDoSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    createdAt
    email
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
  onUpdateCart(filter: $filter) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onUpdateCartItem = /* GraphQL */ `subscription OnUpdateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onUpdateCartItem(filter: $filter) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartItemSubscriptionVariables,
  APITypes.OnUpdateCartItemSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    createdAt
    description
    id
    image
    name
    price
    stock
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onUpdateToDo = /* GraphQL */ `subscription OnUpdateToDo($filter: ModelSubscriptionToDoFilterInput) {
  onUpdateToDo(filter: $filter) {
    createdAt
    description
    id
    image
    name
    price
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateToDoSubscriptionVariables,
  APITypes.OnUpdateToDoSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    createdAt
    email
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
