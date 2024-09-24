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
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const createRevenue = /* GraphQL */ `mutation CreateRevenue(
  $condition: ModelRevenueConditionInput
  $input: CreateRevenueInput!
) {
  createRevenue(condition: $condition, input: $input) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRevenueMutationVariables,
  APITypes.CreateRevenueMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
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
export const createWishlist = /* GraphQL */ `mutation CreateWishlist(
  $condition: ModelWishlistConditionInput
  $input: CreateWishlistInput!
) {
  createWishlist(condition: $condition, input: $input) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWishlistMutationVariables,
  APITypes.CreateWishlistMutation
>;
export const createWishlistProduct = /* GraphQL */ `mutation CreateWishlistProduct(
  $condition: ModelWishlistProductConditionInput
  $input: CreateWishlistProductInput!
) {
  createWishlistProduct(condition: $condition, input: $input) {
    addedAt
    createdAt
    id
    owner
    productId
    updatedAt
    wishlistId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWishlistProductMutationVariables,
  APITypes.CreateWishlistProductMutation
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
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const deleteRevenue = /* GraphQL */ `mutation DeleteRevenue(
  $condition: ModelRevenueConditionInput
  $input: DeleteRevenueInput!
) {
  deleteRevenue(condition: $condition, input: $input) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRevenueMutationVariables,
  APITypes.DeleteRevenueMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
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
export const deleteWishlist = /* GraphQL */ `mutation DeleteWishlist(
  $condition: ModelWishlistConditionInput
  $input: DeleteWishlistInput!
) {
  deleteWishlist(condition: $condition, input: $input) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWishlistMutationVariables,
  APITypes.DeleteWishlistMutation
>;
export const deleteWishlistProduct = /* GraphQL */ `mutation DeleteWishlistProduct(
  $condition: ModelWishlistProductConditionInput
  $input: DeleteWishlistProductInput!
) {
  deleteWishlistProduct(condition: $condition, input: $input) {
    addedAt
    createdAt
    id
    owner
    productId
    updatedAt
    wishlistId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWishlistProductMutationVariables,
  APITypes.DeleteWishlistProductMutation
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
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const updateRevenue = /* GraphQL */ `mutation UpdateRevenue(
  $condition: ModelRevenueConditionInput
  $input: UpdateRevenueInput!
) {
  updateRevenue(condition: $condition, input: $input) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRevenueMutationVariables,
  APITypes.UpdateRevenueMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
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
export const updateWishlist = /* GraphQL */ `mutation UpdateWishlist(
  $condition: ModelWishlistConditionInput
  $input: UpdateWishlistInput!
) {
  updateWishlist(condition: $condition, input: $input) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWishlistMutationVariables,
  APITypes.UpdateWishlistMutation
>;
export const updateWishlistProduct = /* GraphQL */ `mutation UpdateWishlistProduct(
  $condition: ModelWishlistProductConditionInput
  $input: UpdateWishlistProductInput!
) {
  updateWishlistProduct(condition: $condition, input: $input) {
    addedAt
    createdAt
    id
    owner
    productId
    updatedAt
    wishlistId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWishlistProductMutationVariables,
  APITypes.UpdateWishlistProductMutation
>;
