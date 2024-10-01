/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
    createdAt
    id
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const getCartItem = /* GraphQL */ `query GetCartItem($id: ID!) {
  getCartItem(id: $id) {
    cartId
    createdAt
    id
    productId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCartItemQueryVariables,
  APITypes.GetCartItemQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const getToDo = /* GraphQL */ `query GetToDo($id: ID!) {
  getToDo(id: $id) {
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
` as GeneratedQuery<APITypes.GetToDoQueryVariables, APITypes.GetToDoQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    createdAt
    email
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listCartItems = /* GraphQL */ `query ListCartItems(
  $filter: ModelCartItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      cartId
      createdAt
      id
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
  APITypes.ListCartItemsQueryVariables,
  APITypes.ListCartItemsQuery
>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCarts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
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
      price
      stock
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
export const listToDos = /* GraphQL */ `query ListToDos(
  $filter: ModelToDoFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listToDos(
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
      price
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListToDosQueryVariables, APITypes.ListToDosQuery>;
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
      password
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
