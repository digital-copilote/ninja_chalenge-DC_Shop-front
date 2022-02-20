import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Auth = {
  __typename?: 'Auth';
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteDrawResponse = {
  __typename?: 'DeleteDrawResponse';
  draw?: Maybe<Draws>;
  message?: Maybe<Scalars['String']>;
};

export type DeleteOrderItemResponse = {
  __typename?: 'DeleteOrderItemResponse';
  message?: Maybe<Scalars['String']>;
  orderItem?: Maybe<OrdersItems>;
};

export type DeleteOrganizationResponse = {
  __typename?: 'DeleteOrganizationResponse';
  message?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations>;
};

export type DeleteSizeResponse = {
  __typename?: 'DeleteSizeResponse';
  message?: Maybe<Scalars['String']>;
  size?: Maybe<Sizes>;
};

export type DeleteThemeResponse = {
  __typename?: 'DeleteThemeResponse';
  message?: Maybe<Scalars['String']>;
  theme?: Maybe<Themes>;
};

export type Draws = {
  __typename?: 'Draws';
  idDraw: Scalars['ID'];
  idOrganization: Scalars['ID'];
  idTheme: Scalars['ID'];
  idUser: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations>;
  sizes?: Maybe<Array<Maybe<Shirts>>>;
  theme?: Maybe<Themes>;
  urlDraw?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraw?: Maybe<Draws>;
  createOrder?: Maybe<Orders>;
  createOrderItem?: Maybe<OrdersItems>;
  createOrganization?: Maybe<Organizations>;
  createSize?: Maybe<Sizes>;
  createTheme?: Maybe<Themes>;
  createUser?: Maybe<Users>;
  deleteDraw?: Maybe<DeleteDrawResponse>;
  deleteOrder?: Maybe<Orders>;
  deleteOrderItem?: Maybe<DeleteOrderItemResponse>;
  deleteOrganization?: Maybe<DeleteOrganizationResponse>;
  deleteSize?: Maybe<DeleteSizeResponse>;
  deleteTheme?: Maybe<DeleteThemeResponse>;
  deleteUser?: Maybe<Users>;
  loggedIn?: Maybe<Users>;
  updateDraw?: Maybe<UpdateDrawResponse>;
  updateOrder?: Maybe<UpdateOrderResponse>;
  updateOrderItem?: Maybe<UpdateOrderItemResponse>;
  updateOrganization?: Maybe<UpdateOrganizationResponse>;
  updateSize?: Maybe<UpdateSizeResponse>;
  updateTheme?: Maybe<UpdateThemeResponse>;
  updateUser?: Maybe<UpdateUserResponse>;
};

export type MutationCreateDrawArgs = {
  data: DrawCreateInput;
};

export type MutationCreateOrderArgs = {
  data: CreateOrderInput;
};

export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};

export type MutationCreateOrganizationArgs = {
  data: CreateOrganizationInput;
};

export type MutationCreateSizeArgs = {
  data: SizeCreateInput;
};

export type MutationCreateThemeArgs = {
  data: ThemeCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteDrawArgs = {
  idDraw: Scalars['ID'];
};

export type MutationDeleteOrderArgs = {
  idOrder: Scalars['ID'];
};

export type MutationDeleteOrderItemArgs = {
  idOrderItem: Scalars['ID'];
};

export type MutationDeleteOrganizationArgs = {
  idOrganization: Scalars['ID'];
};

export type MutationDeleteSizeArgs = {
  idSize: Scalars['ID'];
};

export type MutationDeleteThemeArgs = {
  idTheme: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
  idUser: Scalars['ID'];
};

export type MutationLoggedInArgs = {
  data: LoggedInCreateInput;
};

export type MutationUpdateDrawArgs = {
  data: UpdateDrawInput;
  idDraw: Scalars['ID'];
};

export type MutationUpdateOrderArgs = {
  data: UpdateOrderInput;
  idOrder: Scalars['ID'];
};

export type MutationUpdateOrderItemArgs = {
  data: UpdateOrderItemInput;
  idOrderItem: Scalars['ID'];
};

export type MutationUpdateOrganizationArgs = {
  data: UpdateOrganizationInput;
  idOrganization: Scalars['ID'];
};

export type MutationUpdateSizeArgs = {
  data: UpdateSizeInput;
  idSize: Scalars['ID'];
};

export type MutationUpdateThemeArgs = {
  data: UpdateThemeInput;
  idTheme: Scalars['ID'];
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  idUser: Scalars['ID'];
};

export type Orders = {
  __typename?: 'Orders';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  idOrder: Scalars['ID'];
  idUser: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  shirts?: Maybe<Array<Maybe<OrdersItems>>>;
  user?: Maybe<Users>;
  zipCode?: Maybe<Scalars['String']>;
};

export type OrdersItems = {
  __typename?: 'OrdersItems';
  idOrderItem: Scalars['ID'];
  idShirt: Scalars['ID'];
  order?: Maybe<Orders>;
  quantity?: Maybe<Scalars['Int']>;
  shirt?: Maybe<Shirts>;
};

export type Organizations = {
  __typename?: 'Organizations';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  draws?: Maybe<Array<Maybe<Draws>>>;
  email?: Maybe<Scalars['String']>;
  idOrganization: Scalars['ID'];
  idUser: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  AllDraws?: Maybe<Array<Maybe<Draws>>>;
  AllOrderItems?: Maybe<Array<Maybe<OrdersItems>>>;
  AllOrders?: Maybe<Array<Maybe<Orders>>>;
  AllOrganizations?: Maybe<Array<Maybe<Organizations>>>;
  AllShirts?: Maybe<Array<Maybe<Shirts>>>;
  AllSizes?: Maybe<Array<Maybe<Sizes>>>;
  AllThemes?: Maybe<Array<Maybe<Themes>>>;
  AllUsers?: Maybe<Array<Maybe<Users>>>;
  OneDraw?: Maybe<Draws>;
  OneOrder?: Maybe<Orders>;
  OneOrderItem?: Maybe<OrdersItems>;
  OneOrganization?: Maybe<Organizations>;
  OneShirt?: Maybe<Shirts>;
  OneSize?: Maybe<Sizes>;
  OneTheme?: Maybe<Themes>;
  OneUser?: Maybe<Users>;
  UserOrganization?: Maybe<Array<Maybe<Organizations>>>;
};

export type QueryOneDrawArgs = {
  idDraw: Scalars['ID'];
};

export type QueryOneOrderArgs = {
  idOrder: Scalars['ID'];
};

export type QueryOneOrderItemArgs = {
  idOrderItem: Scalars['ID'];
};

export type QueryOneOrganizationArgs = {
  idOrganization: Scalars['ID'];
};

export type QueryOneShirtArgs = {
  idShirt: Scalars['ID'];
};

export type QueryOneSizeArgs = {
  idSize: Scalars['ID'];
};

export type QueryOneThemeArgs = {
  idTheme: Scalars['ID'];
};

export type QueryOneUserArgs = {
  idUser: Scalars['ID'];
};

export type QueryUserOrganizationArgs = {
  idUser: Scalars['ID'];
};

export type Shirts = {
  __typename?: 'Shirts';
  draw?: Maybe<Draws>;
  idDraw: Scalars['ID'];
  idShirt: Scalars['ID'];
  idSize: Scalars['ID'];
  orders?: Maybe<Array<Maybe<OrdersItems>>>;
  price?: Maybe<Scalars['Float']>;
  size?: Maybe<Sizes>;
};

export type Sizes = {
  __typename?: 'Sizes';
  draws?: Maybe<Array<Maybe<Shirts>>>;
  idSize: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Themes = {
  __typename?: 'Themes';
  draws?: Maybe<Array<Maybe<Draws>>>;
  idTheme: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateDrawResponse = {
  __typename?: 'UpdateDrawResponse';
  draw?: Maybe<Draws>;
  message?: Maybe<Scalars['String']>;
};

export type UpdateOrderItemResponse = {
  __typename?: 'UpdateOrderItemResponse';
  message?: Maybe<Scalars['String']>;
  orderItem?: Maybe<OrdersItems>;
};

export type UpdateOrderResponse = {
  __typename?: 'UpdateOrderResponse';
  message?: Maybe<Scalars['String']>;
  order?: Maybe<Orders>;
};

export type UpdateOrganizationResponse = {
  __typename?: 'UpdateOrganizationResponse';
  message?: Maybe<Scalars['String']>;
  organization?: Maybe<Organizations>;
};

export type UpdateSizeResponse = {
  __typename?: 'UpdateSizeResponse';
  message?: Maybe<Scalars['String']>;
  size?: Maybe<Sizes>;
};

export type UpdateThemeResponse = {
  __typename?: 'UpdateThemeResponse';
  message?: Maybe<Scalars['String']>;
  theme?: Maybe<Themes>;
};

export type UpdateUserResponse = {
  __typename?: 'UpdateUserResponse';
  message?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
};

export type Users = {
  __typename?: 'Users';
  address?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  city?: Maybe<Scalars['String']>;
  draws?: Maybe<Array<Maybe<Draws>>>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  idUser: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Maybe<Orders>>>;
  organizations?: Maybe<Array<Maybe<Organizations>>>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type CreateOrderInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  idOrder?: InputMaybe<Scalars['Int']>;
  idUser?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type CreateOrganizationInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  idOrganization?: InputMaybe<Scalars['Int']>;
  idUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  siret?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type DrawCreateInput = {
  idDraw?: InputMaybe<Scalars['ID']>;
  idOrganization?: InputMaybe<Scalars['Int']>;
  idTheme: Scalars['Int'];
  idUser: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  urlDraw?: InputMaybe<Scalars['String']>;
};

export type LoggedInCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type OrderItemCreateInput = {
  idOrder: Scalars['Int'];
  idOrderItem?: InputMaybe<Scalars['ID']>;
  idShirt: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type SizeCreateInput = {
  idSize?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ThemeCreateInput = {
  idTheme?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateDrawInput = {
  idDraw?: InputMaybe<Scalars['ID']>;
  idOrganization?: InputMaybe<Scalars['Int']>;
  idTheme: Scalars['Int'];
  idUser: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  urlDraw?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  idOrder?: InputMaybe<Scalars['Int']>;
  idUser?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderItemInput = {
  idOrder?: InputMaybe<Scalars['Int']>;
  idOrderItem?: InputMaybe<Scalars['ID']>;
  idShirt: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type UpdateOrganizationInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  idOrganization?: InputMaybe<Scalars['Int']>;
  idUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  siret?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateSizeInput = {
  idSize?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateThemeInput = {
  idTheme?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UserCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  city?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type QueryQueryVariables = Exact<{ [key: string]: never }>;

export type QueryQuery = {
  __typename?: 'Query';
  AllUsers?: Array<{
    __typename?: 'Users';
    email: string;
    organizations?: Array<{
      __typename?: 'Organizations';
      name?: string | null;
    } | null> | null;
    draws?: Array<{ __typename?: 'Draws'; name?: string | null } | null> | null;
  } | null> | null;
};

export const QueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Query' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AllUsers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'organizations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'draws' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
