/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $condition: ModelOrderConditionInput
  $input: CreateOrderInput!
) {
  createOrder(condition: $condition, input: $input) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const createOrderProduct = /* GraphQL */ `mutation CreateOrderProduct(
  $condition: ModelOrderProductConditionInput
  $input: CreateOrderProductInput!
) {
  createOrderProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrderProductMutationVariables,
  APITypes.CreateOrderProductMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $condition: ModelProductConditionInput
  $input: CreateProductInput!
) {
  createProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const createToDo = /* GraphQL */ `mutation CreateToDo(
  $condition: ModelToDoConditionInput
  $input: CreateToDoInput!
) {
  createToDo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateToDoMutationVariables,
  APITypes.CreateToDoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $condition: ModelOrderConditionInput
  $input: DeleteOrderInput!
) {
  deleteOrder(condition: $condition, input: $input) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const deleteOrderProduct = /* GraphQL */ `mutation DeleteOrderProduct(
  $condition: ModelOrderProductConditionInput
  $input: DeleteOrderProductInput!
) {
  deleteOrderProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderProductMutationVariables,
  APITypes.DeleteOrderProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $condition: ModelProductConditionInput
  $input: DeleteProductInput!
) {
  deleteProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const deleteToDo = /* GraphQL */ `mutation DeleteToDo(
  $condition: ModelToDoConditionInput
  $input: DeleteToDoInput!
) {
  deleteToDo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteToDoMutationVariables,
  APITypes.DeleteToDoMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $condition: ModelOrderConditionInput
  $input: UpdateOrderInput!
) {
  updateOrder(condition: $condition, input: $input) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const updateOrderProduct = /* GraphQL */ `mutation UpdateOrderProduct(
  $condition: ModelOrderProductConditionInput
  $input: UpdateOrderProductInput!
) {
  updateOrderProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderProductMutationVariables,
  APITypes.UpdateOrderProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $condition: ModelProductConditionInput
  $input: UpdateProductInput!
) {
  updateProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const updateToDo = /* GraphQL */ `mutation UpdateToDo(
  $condition: ModelToDoConditionInput
  $input: UpdateToDoInput!
) {
  updateToDo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateToDoMutationVariables,
  APITypes.UpdateToDoMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
