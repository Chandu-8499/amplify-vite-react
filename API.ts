/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Cart = {
  __typename: "Cart",
  createdAt?: number | null,
  id: string,
  updatedAt?: number | null,
  userId?: string | null,
};

export type CartItem = {
  __typename: "CartItem",
  cartId?: string | null,
  createdAt: string,
  id: string,
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
  price?: number | null,
  stock?: number | null,
  updatedAt?: number | null,
};

export type ToDo = {
  __typename: "ToDo",
  createdAt?: number | null,
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  price?: number | null,
  updatedAt?: number | null,
};

export type User = {
  __typename: "User",
  createdAt?: number | null,
  email?: string | null,
  id: string,
  name?: string | null,
  password?: string | null,
  updatedAt?: number | null,
};

export type ModelCartItemFilterInput = {
  and?: Array< ModelCartItemFilterInput | null > | null,
  cartId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCartItemFilterInput | null,
  or?: Array< ModelCartItemFilterInput | null > | null,
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

export type ModelCartItemConnection = {
  __typename: "ModelCartItemConnection",
  items:  Array<CartItem | null >,
  nextToken?: string | null,
};

export type ModelCartFilterInput = {
  and?: Array< ModelCartFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  not?: ModelCartFilterInput | null,
  or?: Array< ModelCartFilterInput | null > | null,
  updatedAt?: ModelIntInput | null,
  userId?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
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
  price?: ModelFloatInput | null,
  stock?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
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

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelToDoFilterInput = {
  and?: Array< ModelToDoFilterInput | null > | null,
  createdAt?: ModelIntInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelToDoFilterInput | null,
  or?: Array< ModelToDoFilterInput | null > | null,
  price?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
};

export type ModelToDoConnection = {
  __typename: "ModelToDoConnection",
  items:  Array<ToDo | null >,
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
  password?: ModelStringInput | null,
  updatedAt?: ModelIntInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCartConditionInput = {
  and?: Array< ModelCartConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  not?: ModelCartConditionInput | null,
  or?: Array< ModelCartConditionInput | null > | null,
  updatedAt?: ModelIntInput | null,
  userId?: ModelStringInput | null,
};

export type CreateCartInput = {
  createdAt?: number | null,
  id?: string | null,
  updatedAt?: number | null,
  userId?: string | null,
};

export type ModelCartItemConditionInput = {
  and?: Array< ModelCartItemConditionInput | null > | null,
  cartId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCartItemConditionInput | null,
  or?: Array< ModelCartItemConditionInput | null > | null,
  productId?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCartItemInput = {
  cartId?: string | null,
  id?: string | null,
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
  price?: ModelFloatInput | null,
  stock?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
};

export type CreateProductInput = {
  createdAt?: number | null,
  description?: string | null,
  id?: string | null,
  image?: string | null,
  name?: string | null,
  price?: number | null,
  stock?: number | null,
  updatedAt?: number | null,
};

export type ModelToDoConditionInput = {
  and?: Array< ModelToDoConditionInput | null > | null,
  createdAt?: ModelIntInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelToDoConditionInput | null,
  or?: Array< ModelToDoConditionInput | null > | null,
  price?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
};

export type CreateToDoInput = {
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

export type DeleteCartInput = {
  id: string,
};

export type DeleteCartItemInput = {
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type DeleteToDoInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateCartInput = {
  createdAt?: number | null,
  id: string,
  updatedAt?: number | null,
  userId?: string | null,
};

export type UpdateCartItemInput = {
  cartId?: string | null,
  id: string,
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
  stock?: number | null,
  updatedAt?: number | null,
};

export type UpdateToDoInput = {
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

export type ModelSubscriptionCartFilterInput = {
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
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

export type ModelSubscriptionCartItemFilterInput = {
  and?: Array< ModelSubscriptionCartItemFilterInput | null > | null,
  cartId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCartItemFilterInput | null > | null,
  productId?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionProductFilterInput = {
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  price?: ModelSubscriptionFloatInput | null,
  stock?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
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

export type ModelSubscriptionToDoFilterInput = {
  and?: Array< ModelSubscriptionToDoFilterInput | null > | null,
  createdAt?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionToDoFilterInput | null > | null,
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
  password?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type GetCartItemQueryVariables = {
  id: string,
};

export type GetCartItemQuery = {
  getCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
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
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type GetToDoQueryVariables = {
  id: string,
};

export type GetToDoQuery = {
  getToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
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
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type ListCartItemsQueryVariables = {
  filter?: ModelCartItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartItemsQuery = {
  listCartItems?:  {
    __typename: "ModelCartItemConnection",
    items:  Array< {
      __typename: "CartItem",
      cartId?: string | null,
      createdAt: string,
      id: string,
      productId?: string | null,
      quantity?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      createdAt?: number | null,
      id: string,
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
      price?: number | null,
      stock?: number | null,
      updatedAt?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListToDosQueryVariables = {
  filter?: ModelToDoFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListToDosQuery = {
  listToDos?:  {
    __typename: "ModelToDoConnection",
    items:  Array< {
      __typename: "ToDo",
      createdAt?: number | null,
      description?: string | null,
      id: string,
      image?: string | null,
      name?: string | null,
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
      password?: string | null,
      updatedAt?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: CreateCartInput,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type CreateCartItemMutationVariables = {
  condition?: ModelCartItemConditionInput | null,
  input: CreateCartItemInput,
};

export type CreateCartItemMutation = {
  createCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
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
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type CreateToDoMutationVariables = {
  condition?: ModelToDoConditionInput | null,
  input: CreateToDoInput,
};

export type CreateToDoMutation = {
  createToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
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
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: DeleteCartInput,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type DeleteCartItemMutationVariables = {
  condition?: ModelCartItemConditionInput | null,
  input: DeleteCartItemInput,
};

export type DeleteCartItemMutation = {
  deleteCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
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
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type DeleteToDoMutationVariables = {
  condition?: ModelToDoConditionInput | null,
  input: DeleteToDoInput,
};

export type DeleteToDoMutation = {
  deleteToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
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
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: UpdateCartInput,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type UpdateCartItemMutationVariables = {
  condition?: ModelCartItemConditionInput | null,
  input: UpdateCartItemInput,
};

export type UpdateCartItemMutation = {
  updateCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
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
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type UpdateToDoMutationVariables = {
  condition?: ModelToDoConditionInput | null,
  input: UpdateToDoInput,
};

export type UpdateToDoMutation = {
  updateToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
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
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnCreateCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnCreateCartItemSubscription = {
  onCreateCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnCreateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnCreateToDoSubscription = {
  onCreateToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnDeleteCartItemSubscription = {
  onDeleteCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnDeleteToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnDeleteToDoSubscription = {
  onDeleteToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    createdAt?: number | null,
    id: string,
    updatedAt?: number | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnUpdateCartItemSubscription = {
  onUpdateCartItem?:  {
    __typename: "CartItem",
    cartId?: string | null,
    createdAt: string,
    id: string,
    productId?: string | null,
    quantity?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    price?: number | null,
    stock?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnUpdateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnUpdateToDoSubscription = {
  onUpdateToDo?:  {
    __typename: "ToDo",
    createdAt?: number | null,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    price?: number | null,
    updatedAt?: number | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt?: number | null,
    email?: string | null,
    id: string,
    name?: string | null,
    password?: string | null,
    updatedAt?: number | null,
  } | null,
};
