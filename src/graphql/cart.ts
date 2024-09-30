import { gql } from '@apollo/client';

// Add product to cart mutation
export const ADD_TO_CART = gql`
  mutation AddToCart($orderId: ID!, $productId: ID!, $quantity: Int!) {
    addToCart(orderId: $orderId, productId: $productId, quantity: $quantity) {
      orderId
      productId
      quantity
      price
    }
  }
`;

// Update cart (change product quantity) mutation
export const UPDATE_CART = gql`
  mutation UpdateCart($orderId: ID!, $productId: ID!, $quantity: Int!) {
    updateCart(orderId: $orderId, productId: $productId, quantity: $quantity) {
      orderId
      productId
      quantity
    }
  }
`;

// Remove product from cart mutation
export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($orderId: ID!, $productId: ID!) {
    removeFromCart(orderId: $orderId, productId: $productId) {
      success
    }
  }
`;

// Checkout mutation
export const CHECKOUT = gql`
  mutation Checkout($orderId: ID!) {
    checkout(orderId: $orderId) {
      success
    }
  }
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    listOrderProducts {
      items {
        productId
        quantity
        price
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      image
    }
  }
`;