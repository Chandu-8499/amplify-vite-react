/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    createdAt
    id
    owner
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const getOrderProduct = /* GraphQL */ `query GetOrderProduct($id: ID!) {
  getOrderProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrderProductQueryVariables,
  APITypes.GetOrderProductQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const getRevenue = /* GraphQL */ `query GetRevenue($id: ID!) {
  getRevenue(id: $id) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRevenueQueryVariables,
  APITypes.GetRevenueQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getWishlist = /* GraphQL */ `query GetWishlist($id: ID!) {
  getWishlist(id: $id) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWishlistQueryVariables,
  APITypes.GetWishlistQuery
>;
export const getWishlistProduct = /* GraphQL */ `query GetWishlistProduct($id: ID!) {
  getWishlistProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWishlistProductQueryVariables,
  APITypes.GetWishlistProductQuery
>;
export const listOrderProducts = /* GraphQL */ `query ListOrderProducts(
  $filter: ModelOrderProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderProductsQueryVariables,
  APITypes.ListOrderProductsQuery
>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrders(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      owner
      status
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProducts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const listRevenues = /* GraphQL */ `query ListRevenues(
  $filter: ModelRevenueFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRevenues(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      amount
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRevenuesQueryVariables,
  APITypes.ListRevenuesQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      isDone
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      id
      name
      owner
      password
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const listWishlistProducts = /* GraphQL */ `query ListWishlistProducts(
  $filter: ModelWishlistProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listWishlistProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      addedAt
      createdAt
      id
      owner
      productId
      updatedAt
      wishlistId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWishlistProductsQueryVariables,
  APITypes.ListWishlistProductsQuery
>;
export const listWishlists = /* GraphQL */ `query ListWishlists(
  $filter: ModelWishlistFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listWishlists(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWishlistsQueryVariables,
  APITypes.ListWishlistsQuery
>;
