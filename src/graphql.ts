import { gql } from '@apollo/client';

// Create product mutation
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Get all products query
export const GET_PRODUCTS = gql`
  query GetProducts {
    listProducts {
      items {
        id
        name
        description
        price
        stock
      }
    }
  }
`;

// Update product mutation
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Delete product mutation
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

// Fragments (Optional, helps avoid repetition in queries/mutations)
export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    description
    price
    stock
  }
`;

// Refactor to use fragments in queries/mutations
export const CREATE_PRODUCT_WITH_FRAGMENT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      ...ProductFields
    }
  }
  ${PRODUCT_FIELDS}
`;

export const GET_PRODUCTS_WITH_FRAGMENT = gql`
  query GetProducts {
    listProducts {
      items {
        ...ProductFields
      }
    }
  }
  ${PRODUCT_FIELDS}
`;

export const UPDATE_PRODUCT_WITH_FRAGMENT = gql`
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      ...ProductFields
    }
  }
  ${PRODUCT_FIELDS}
`;

export const DELETE_PRODUCT_WITH_FRAGMENT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

// Query to get the user's cart
export const GET_CART = gql`
  query GetCart($userId: ID!) {
    getCart(userId: $userId) {
      id
      userId
      items {
        productId
        name
        quantity
        price
      }
      total
    }
  }
`;

// Mutation to add an item to the cart
export const ADD_CART_ITEM = gql`
  mutation AddCartItem($input: AddCartItemInput!) {
    addCartItem(input: $input) {
      id
      userId
      items {
        productId
        name
        quantity
        price
      }
      total
    }
  }
`;

// Mutation to update item quantity in the cart
export const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($input: UpdateCartItemInput!) {
    updateCartItem(input: $input) {
      id
      userId
      items {
        productId
        name
        quantity
        price
      }
      total
    }
  }
`;

// Mutation to remove an item from the cart
export const REMOVE_CART_ITEM = gql`
  mutation RemoveCartItem($userId: ID!, $productId: ID!) {
    removeCartItem(userId: $userId, productId: $productId) {
      id
      userId
      items {
        productId
        name
        quantity
        price
      }
      total
    }
  }
`;