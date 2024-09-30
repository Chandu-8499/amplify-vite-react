/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
    createdAt
    id
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
) {
  onCreateOrderProduct(filter: $filter) {
    createdAt
    id
    orderId
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
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
    createdAt
    id
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
) {
  onDeleteOrderProduct(filter: $filter) {
    createdAt
    id
    orderId
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
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
    createdAt
    id
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
) {
  onUpdateOrderProduct(filter: $filter) {
    createdAt
    id
    orderId
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
