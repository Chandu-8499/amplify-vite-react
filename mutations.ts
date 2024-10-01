/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCart = /* GraphQL */ `mutation CreateCart(
  $condition: ModelCartConditionInput
  $input: CreateCartInput!
) {
  createCart(condition: $condition, input: $input) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const createCartItem = /* GraphQL */ `mutation CreateCartItem(
  $condition: ModelCartItemConditionInput
  $input: CreateCartItemInput!
) {
  createCartItem(condition: $condition, input: $input) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartItemMutationVariables,
  APITypes.CreateCartItemMutation
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
    password
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $condition: ModelCartConditionInput
  $input: DeleteCartInput!
) {
  deleteCart(condition: $condition, input: $input) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
export const deleteCartItem = /* GraphQL */ `mutation DeleteCartItem(
  $condition: ModelCartItemConditionInput
  $input: DeleteCartItemInput!
) {
  deleteCartItem(condition: $condition, input: $input) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartItemMutationVariables,
  APITypes.DeleteCartItemMutation
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
    password
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $condition: ModelCartConditionInput
  $input: UpdateCartInput!
) {
  updateCart(condition: $condition, input: $input) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const updateCartItem = /* GraphQL */ `mutation UpdateCartItem(
  $condition: ModelCartItemConditionInput
  $input: UpdateCartItemInput!
) {
  updateCartItem(condition: $condition, input: $input) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartItemMutationVariables,
  APITypes.UpdateCartItemMutation
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
    password
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
