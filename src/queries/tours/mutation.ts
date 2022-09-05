import { gql } from "@apollo/client";

export const CREATE_TOUR = gql`
  mutation UpdateTour($tour: TourInput!) {
    createTour(tour: $tour) {
      code
      success
      message
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
export const UPDATE_TOUR = gql`
  mutation UpdateTour($updateTourId: ID!, $tour: TourInput!) {
    updateTour(id: $updateTourId, tour: $tour) {
      code
      success
      message
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
export const DELETE_TOUR = gql`
  mutation UpdateTour($deleteTourId: ID!) {
    deleteTour(id: $deleteTourId) {
      code
      success
      message
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
