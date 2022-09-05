import { gql } from "@apollo/client";
export const LOGIN = gql`
  mutation Mutation($account: AccountInput!) {
    login(account: $account) {
      code
      success
      message
      token
    }
  }
`;
export const CUSTOM_ACCOUNT = gql`
  mutation Mutation($account: AccountInput!) {
    customAccount(account: $account) {
      code
      success
      message
      token
    }
  }
`;
export const UPDATE_ACCOUNT = gql`
  mutation Mutation($updateAccountId: ID!, $account: AccountUpdateInput!) {
    updateAccount(id: $updateAccountId, account: $account) {
      code
      success
      message
      account {
        id
        email
        phone
        roles
        permissions
      }
    }
  }
`;
export const DELETE_ACCOUNT = gql`
  mutation Mutation($deleteAccountId: ID!) {
    deleteAccount(id: $deleteAccountId) {
      code
      success
      message
      account {
        id
        email
        phone
        roles
        permissions
      }
    }
  }
`;
