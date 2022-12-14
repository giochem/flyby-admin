import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation Mutation($order: OrderInput!) {
    createOrder(order: $order) {
      code
      success
      message
      order {
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
  }
`;

export const DELETE_ORDER = gql`
  mutation Mutation($deleteOrderId: ID!) {
    deleteOrder(id: $deleteOrderId) {
      code
      success
      message
      order {
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
  }
`;
