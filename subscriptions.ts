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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onCreateRevenue = /* GraphQL */ `subscription OnCreateRevenue(
  $filter: ModelSubscriptionRevenueFilterInput
  $owner: String
) {
  onCreateRevenue(filter: $filter, owner: $owner) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRevenueSubscriptionVariables,
  APITypes.OnCreateRevenueSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
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
export const onCreateWishlist = /* GraphQL */ `subscription OnCreateWishlist(
  $filter: ModelSubscriptionWishlistFilterInput
  $owner: String
) {
  onCreateWishlist(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWishlistSubscriptionVariables,
  APITypes.OnCreateWishlistSubscription
>;
export const onCreateWishlistProduct = /* GraphQL */ `subscription OnCreateWishlistProduct(
  $filter: ModelSubscriptionWishlistProductFilterInput
  $owner: String
) {
  onCreateWishlistProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWishlistProductSubscriptionVariables,
  APITypes.OnCreateWishlistProductSubscription
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onDeleteRevenue = /* GraphQL */ `subscription OnDeleteRevenue(
  $filter: ModelSubscriptionRevenueFilterInput
  $owner: String
) {
  onDeleteRevenue(filter: $filter, owner: $owner) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRevenueSubscriptionVariables,
  APITypes.OnDeleteRevenueSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
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
export const onDeleteWishlist = /* GraphQL */ `subscription OnDeleteWishlist(
  $filter: ModelSubscriptionWishlistFilterInput
  $owner: String
) {
  onDeleteWishlist(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWishlistSubscriptionVariables,
  APITypes.OnDeleteWishlistSubscription
>;
export const onDeleteWishlistProduct = /* GraphQL */ `subscription OnDeleteWishlistProduct(
  $filter: ModelSubscriptionWishlistProductFilterInput
  $owner: String
) {
  onDeleteWishlistProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWishlistProductSubscriptionVariables,
  APITypes.OnDeleteWishlistProductSubscription
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onUpdateRevenue = /* GraphQL */ `subscription OnUpdateRevenue(
  $filter: ModelSubscriptionRevenueFilterInput
  $owner: String
) {
  onUpdateRevenue(filter: $filter, owner: $owner) {
    amount
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRevenueSubscriptionVariables,
  APITypes.OnUpdateRevenueSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    isDone
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
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
export const onUpdateWishlist = /* GraphQL */ `subscription OnUpdateWishlist(
  $filter: ModelSubscriptionWishlistFilterInput
  $owner: String
) {
  onUpdateWishlist(filter: $filter, owner: $owner) {
    createdAt
    id
    owner
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWishlistSubscriptionVariables,
  APITypes.OnUpdateWishlistSubscription
>;
export const onUpdateWishlistProduct = /* GraphQL */ `subscription OnUpdateWishlistProduct(
  $filter: ModelSubscriptionWishlistProductFilterInput
  $owner: String
) {
  onUpdateWishlistProduct(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWishlistProductSubscriptionVariables,
  APITypes.OnUpdateWishlistProductSubscription
>;
