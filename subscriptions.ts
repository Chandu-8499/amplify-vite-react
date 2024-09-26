/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onCreateOrder(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onCreateOrderProduct = /* GraphQL */ `subscription OnCreateOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
  $owner: String
) {
  onCreateOrderProduct(filter: $filter, owner: $owner) {
    createdAt
    id
    orderId
    owner
    price
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderProductSubscriptionVariables,
  APITypes.OnCreateOrderProductSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
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
export const onCreateToDo = /* GraphQL */ `subscription OnCreateToDo(
  $filter: ModelSubscriptionToDoFilterInput
  $owner: String
) {
  onCreateToDo(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
    price
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateToDoSubscriptionVariables,
  APITypes.OnCreateToDoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
    createdAt
    email
    id
    name
    owner
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onDeleteOrder(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onDeleteOrderProduct = /* GraphQL */ `subscription OnDeleteOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
  $owner: String
) {
  onDeleteOrderProduct(filter: $filter, owner: $owner) {
    createdAt
    id
    orderId
    owner
    price
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderProductSubscriptionVariables,
  APITypes.OnDeleteOrderProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
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
export const onDeleteToDo = /* GraphQL */ `subscription OnDeleteToDo(
  $filter: ModelSubscriptionToDoFilterInput
  $owner: String
) {
  onDeleteToDo(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
    price
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteToDoSubscriptionVariables,
  APITypes.OnDeleteToDoSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
    createdAt
    email
    id
    name
    owner
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onUpdateOrder(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onUpdateOrderProduct = /* GraphQL */ `subscription OnUpdateOrderProduct(
  $filter: ModelSubscriptionOrderProductFilterInput
  $owner: String
) {
  onUpdateOrderProduct(filter: $filter, owner: $owner) {
    createdAt
    id
    orderId
    owner
    price
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderProductSubscriptionVariables,
  APITypes.OnUpdateOrderProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
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
export const onUpdateToDo = /* GraphQL */ `subscription OnUpdateToDo(
  $filter: ModelSubscriptionToDoFilterInput
  $owner: String
) {
  onUpdateToDo(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
    price
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateToDoSubscriptionVariables,
  APITypes.OnUpdateToDoSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
    createdAt
    email
    id
    name
    owner
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
