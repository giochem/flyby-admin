import { gql } from "@apollo/client";

export const ORDERS = gql`
  query Orders {
    orders {
      id
      account {
        id
        email
        phone
        roles
        permissions
      }
      tour {
        id
        name
        decs
        image
        quantity
      }
    }
  }
`;
