import { gql } from "@apollo/client";

export const ACCOUNT = gql`
  query Query($accountId: ID!) {
    account(id: $accountId) {
      id
      email
      phone
      roles
      permissions
    }
  }
`;
export const ACCOUNTS = gql`
  query Accounts($roles: [String]) {
    accounts(roles: $roles) {
      id
      email
      phone
      roles
      permissions
    }
  }
`;
