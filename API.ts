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

export type DeleteOrderInput = {
  id: string,
};

export type DeleteOrderProductInput = {
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type DeleteUserInput = {
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

export type UpdateUserInput = {
  createdAt?: number | null,
  email?: string | null,
  id: string,
  name?: string | null,
  password?: string | null,
  updatedAt?: number | null,
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
