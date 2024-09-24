/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Order = {
  __typename: "Order",
  createdAt?: number | null,
  id: string,
  owner?: string | null,
  status?: OrderStatus | null,
  updatedAt?: number | null,
  userId?: string | null,
};

export enum OrderStatus {
  DELIVERED = "DELIVERED",
  IN_CART = "IN_CART",
  IN_TRANSIT = "IN_TRANSIT",
  PENDING = "PENDING",
  PLACED = "PLACED",
  REPLACED = "REPLACED",
  RETURNED = "RETURNED",
}


export type OrderProduct = {
  __typename: "OrderProduct",
  createdAt: string,
  id: string,
  orderId?: string | null,
  owner?: string | null,
  price?: number | null,
  productId?: string | null,
  quantity?: number | null,
  updatedAt: string,
};

export type Product = {
  __typename: "Product",
  createdAt?: number | null,
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  owner?: string | null,
  price?: number | null,
  updatedAt?: number | null,
};

export type Revenue = {
  __typename: "Revenue",
  amount?: number | null,
  createdAt?: number | null,
  id: string,
  owner?: string | null,
  updatedAt?: number | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  isDone?: boolean | null,
  owner?: string | null,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  createdAt?: number | null,
  email?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
  password?: string | null,
  updatedAt?: number | null,
};

export type Wishlist = {
  __typename: "Wishlist",
  createdAt?: number | null,
  id: string,
  owner?: string | null,
  updatedAt?: number | null,
  userId?: string | null,
};

export type WishlistProduct = {
  __typename: "WishlistProduct",
  addedAt?: number | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  productId?: string | null,
  updatedAt: string,
  wishlistId?: string | null,
};

export type ModelOrderProductFilterInput = {
  and?: Array< ModelOrderProductFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelOrderProductFilterInput | null,
  or?: Array< ModelOrderProductFilterInput | null > | null,
  orderId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  productId?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelOrderProductConnection = {
  __typename: "ModelOrderProductConnection",
  items:  Array<OrderProduct | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  and?: Array< ModelOrderFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  not?: ModelOrderFilterInput | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelOrderStatusInput | null,
  updatedAt?: ModelIntInput | null,
  userId?: ModelStringInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  and?: Array< ModelProductFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProductFilterInput | null,
  or?: Array< ModelProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelRevenueFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelRevenueFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  not?: ModelRevenueFilterInput | null,
  or?: Array< ModelRevenueFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
};

export type ModelRevenueConnection = {
  __typename: "ModelRevenueConnection",
  items:  Array<Revenue | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  password?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelWishlistProductFilterInput = {
  addedAt?: ModelIntInput | null,
  and?: Array< ModelWishlistProductFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelWishlistProductFilterInput | null,
  or?: Array< ModelWishlistProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
  productId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  wishlistId?: ModelStringInput | null,
};

export type ModelWishlistProductConnection = {
  __typename: "ModelWishlistProductConnection",
  items:  Array<WishlistProduct | null >,
  nextToken?: string | null,
};

export type ModelWishlistFilterInput = {
  and?: Array< ModelWishlistFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  not?: ModelWishlistFilterInput | null,
  or?: Array< ModelWishlistFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
  userId?: ModelStringInput | null,
};

export type ModelWishlistConnection = {
  __typename: "ModelWishlistConnection",
  items:  Array<Wishlist | null >,
  nextToken?: string | null,
};

export type ModelOrderConditionInput = {
  and?: Array< ModelOrderConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  not?: ModelOrderConditionInput | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelOrderStatusInput | null,
  updatedAt?: ModelIntInput | null,
  userId?: ModelStringInput | null,
};

export type CreateOrderInput = {
  createdAt?: number | null,
  id?: string | null,
  status?: OrderStatus | null,
  updatedAt?: number | null,
  userId?: string | null,
};

export type ModelOrderProductConditionInput = {
  and?: Array< ModelOrderProductConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelOrderProductConditionInput | null,
  or?: Array< ModelOrderProductConditionInput | null > | null,
  orderId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  productId?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateOrderProductInput = {
  id?: string | null,
  orderId?: string | null,
  price?: number | null,
  productId?: string | null,
  quantity?: number | null,
};

export type ModelProductConditionInput = {
  and?: Array< ModelProductConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProductConditionInput | null,
  or?: Array< ModelProductConditionInput | null > | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
};

export type CreateProductInput = {
  createdAt?: number | null,
  description?: string | null,
  id?: string | null,
  image?: string | null,
  name?: string | null,
  price?: number | null,
  updatedAt?: number | null,
};

export type ModelRevenueConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelRevenueConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  not?: ModelRevenueConditionInput | null,
  or?: Array< ModelRevenueConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
};

export type CreateRevenueInput = {
  amount?: number | null,
  createdAt?: number | null,
  id?: string | null,
  updatedAt?: number | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
  isDone?: boolean | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  password?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
};

export type CreateUserInput = {
  createdAt?: number | null,
  email?: string | null,
  id?: string | null,
  name?: string | null,
  password?: string | null,
  updatedAt?: number | null,
};

export type ModelWishlistConditionInput = {
  and?: Array< ModelWishlistConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  not?: ModelWishlistConditionInput | null,
  or?: Array< ModelWishlistConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
  userId?: ModelStringInput | null,
};

export type CreateWishlistInput = {
  createdAt?: number | null,
  id?: string | null,
  updatedAt?: number | null,
  userId?: string | null,
};

export type ModelWishlistProductConditionInput = {
  addedAt?: ModelIntInput | null,
  and?: Array< ModelWishlistProductConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelWishlistProductConditionInput | null,
  or?: Array< ModelWishlistProductConditionInput | null > | null,
  owner?: ModelStringInput | null,
  productId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  wishlistId?: ModelStringInput | null,
};

export type CreateWishlistProductInput = {
  addedAt?: number | null,
  id?: string | null,
  productId?: string | null,
  wishlistId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type DeleteOrderProductInput = {
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type DeleteRevenueInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteWishlistInput = {
  id: string,
};

export type DeleteWishlistProductInput = {
  id: string,
};

export type UpdateOrderInput = {
  createdAt?: number | null,
  id: string,
  status?: OrderStatus | null,
  updatedAt?: number | null,
  userId?: string | null,
};

export type UpdateOrderProductInput = {
  id: string,
  orderId?: string | null,
  price?: number | null,
  productId?: string | null,
  quantity?: number | null,
};

export type UpdateProductInput = {
  createdAt?: number | null,
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  price?: number | null,
  updatedAt?: number | null,
};

export type UpdateRevenueInput = {
  amount?: number | null,
  createdAt?: number | null,
  id: string,
  updatedAt?: number | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
  isDone?: boolean | null,
};

export type UpdateUserInput = {
  createdAt?: number | null,
  email?: string | null,
  id: string,
  name?: string | null,
  password?: string | null,
  updatedAt?: number | null,
};

export type UpdateWishlistInput = {
  createdAt?: number | null,
  id: string,
  updatedAt?: number | null,
  userId?: string | null,
};

export type UpdateWishlistProductInput = {
  addedAt?: number | null,
  id: string,
  productId?: string | null,
  wishlistId?: string | null,
};

export type ModelSubscriptionOrderFilterInput = {
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOrderProductFilterInput = {
  and?: Array< ModelSubscriptionOrderProductFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOrderProductFilterInput | null > | null,
  orderId?: ModelSubscriptionStringInput | null,
  owner?: ModelStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  productId?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionRevenueFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionRevenueFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionRevenueFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionWishlistFilterInput = {
  and?: Array< ModelSubscriptionWishlistFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionWishlistFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionWishlistProductFilterInput = {
  addedAt?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionWishlistProductFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionWishlistProductFilterInput | null > | null,
  owner?: ModelStringInput | null,
  productId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  wishlistId?: ModelSubscriptionStringInput | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type GetOrderProductQueryVariables = {
  id: string,
};

export type GetOrderProductQuery = {
  getOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type GetRevenueQueryVariables = {
  id: string,
};

export type GetRevenueQuery = {
  getRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type GetWishlistQueryVariables = {
  id: string,
};

export type GetWishlistQuery = {
  getWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type GetWishlistProductQueryVariables = {
  id: string,
};

export type GetWishlistProductQuery = {
  getWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};

export type ListOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderProductsQuery = {
  listOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items:  Array< {
      __typename: "OrderProduct",
      createdAt: string,
      id: string,
      orderId?: string | null,
      owner?: string | null,
      price?: number | null,
      productId?: string | null,
      quantity?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      createdAt?: number | null,
      id: string,
      owner?: string | null,
      status?: OrderStatus | null,
      updatedAt?: number | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      createdAt?: number | null,
      description?: string | null,
      id: string,
      image?: string | null,
      name?: string | null,
      owner?: string | null,
      price?: number | null,
      updatedAt?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRevenuesQueryVariables = {
  filter?: ModelRevenueFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRevenuesQuery = {
  listRevenues?:  {
    __typename: "ModelRevenueConnection",
    items:  Array< {
      __typename: "Revenue",
      amount?: number | null,
      createdAt?: number | null,
      id: string,
      owner?: string | null,
      updatedAt?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      isDone?: boolean | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt?: number | null,
      email?: string | null,
      id: string,
      name?: string | null,
      owner?: string | null,
      password?: string | null,
      updatedAt?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListWishlistProductsQueryVariables = {
  filter?: ModelWishlistProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWishlistProductsQuery = {
  listWishlistProducts?:  {
    __typename: "ModelWishlistProductConnection",
    items:  Array< {
      __typename: "WishlistProduct",
      addedAt?: number | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      productId?: string | null,
      updatedAt: string,
      wishlistId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListWishlistsQueryVariables = {
  filter?: ModelWishlistFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListWishlistsQuery = {
  listWishlists?:  {
    __typename: "ModelWishlistConnection",
    items:  Array< {
      __typename: "Wishlist",
      createdAt?: number | null,
      id: string,
      owner?: string | null,
      updatedAt?: number | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: CreateOrderInput,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type CreateOrderProductMutationVariables = {
  condition?: ModelOrderProductConditionInput | null,
  input: CreateOrderProductInput,
};

export type CreateOrderProductMutation = {
  createOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: CreateProductInput,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type CreateRevenueMutationVariables = {
  condition?: ModelRevenueConditionInput | null,
  input: CreateRevenueInput,
};

export type CreateRevenueMutation = {
  createRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type CreateWishlistMutationVariables = {
  condition?: ModelWishlistConditionInput | null,
  input: CreateWishlistInput,
};

export type CreateWishlistMutation = {
  createWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type CreateWishlistProductMutationVariables = {
  condition?: ModelWishlistProductConditionInput | null,
  input: CreateWishlistProductInput,
};

export type CreateWishlistProductMutation = {
  createWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: DeleteOrderInput,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type DeleteOrderProductMutationVariables = {
  condition?: ModelOrderProductConditionInput | null,
  input: DeleteOrderProductInput,
};

export type DeleteOrderProductMutation = {
  deleteOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: DeleteProductInput,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type DeleteRevenueMutationVariables = {
  condition?: ModelRevenueConditionInput | null,
  input: DeleteRevenueInput,
};

export type DeleteRevenueMutation = {
  deleteRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type DeleteWishlistMutationVariables = {
  condition?: ModelWishlistConditionInput | null,
  input: DeleteWishlistInput,
};

export type DeleteWishlistMutation = {
  deleteWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type DeleteWishlistProductMutationVariables = {
  condition?: ModelWishlistProductConditionInput | null,
  input: DeleteWishlistProductInput,
};

export type DeleteWishlistProductMutation = {
  deleteWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: UpdateOrderInput,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type UpdateOrderProductMutationVariables = {
  condition?: ModelOrderProductConditionInput | null,
  input: UpdateOrderProductInput,
};

export type UpdateOrderProductMutation = {
  updateOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: UpdateProductInput,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type UpdateRevenueMutationVariables = {
  condition?: ModelRevenueConditionInput | null,
  input: UpdateRevenueInput,
};

export type UpdateRevenueMutation = {
  updateRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type UpdateWishlistMutationVariables = {
  condition?: ModelWishlistConditionInput | null,
  input: UpdateWishlistInput,
};

export type UpdateWishlistMutation = {
  updateWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type UpdateWishlistProductMutationVariables = {
  condition?: ModelWishlistProductConditionInput | null,
  input: UpdateWishlistProductInput,
};

export type UpdateWishlistProductMutation = {
  updateWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnCreateOrderProductSubscriptionVariables = {
  filter?: ModelSubscriptionOrderProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrderProductSubscription = {
  onCreateOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnCreateRevenueSubscriptionVariables = {
  filter?: ModelSubscriptionRevenueFilterInput | null,
  owner?: string | null,
};

export type OnCreateRevenueSubscription = {
  onCreateRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnCreateWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistFilterInput | null,
  owner?: string | null,
};

export type OnCreateWishlistSubscription = {
  onCreateWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnCreateWishlistProductSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateWishlistProductSubscription = {
  onCreateWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteOrderProductSubscriptionVariables = {
  filter?: ModelSubscriptionOrderProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrderProductSubscription = {
  onDeleteOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnDeleteRevenueSubscriptionVariables = {
  filter?: ModelSubscriptionRevenueFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRevenueSubscription = {
  onDeleteRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnDeleteWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWishlistSubscription = {
  onDeleteWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteWishlistProductSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWishlistProductSubscription = {
  onDeleteWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    status?: OrderStatus | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateOrderProductSubscriptionVariables = {
  filter?: ModelSubscriptionOrderProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrderProductSubscription = {
  onUpdateOrderProduct?:  {
    __typename: "OrderProduct",
    createdAt: string,
    id: string,
    orderId?: string | null,
    owner?: string | null,
    price?: number | null,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnUpdateRevenueSubscriptionVariables = {
  filter?: ModelSubscriptionRevenueFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRevenueSubscription = {
  onUpdateRevenue?:  {
    __typename: "Revenue",
    amount?: number | null,
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    isDone?: boolean | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    owner?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnUpdateWishlistSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWishlistSubscription = {
  onUpdateWishlist?:  {
    __typename: "Wishlist",
    createdAt?: number | null,
    id: string,
    owner?: string | null,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateWishlistProductSubscriptionVariables = {
  filter?: ModelSubscriptionWishlistProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWishlistProductSubscription = {
  onUpdateWishlistProduct?:  {
    __typename: "WishlistProduct",
    addedAt?: number | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    productId?: string | null,
    updatedAt: string,
    wishlistId?: string | null,
  } | null,
};
