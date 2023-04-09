import { gql } from "@apollo/client";

export const GET_LIST_OF_PRODUCTS = gql`
  query {
    getProduct {
      _id
      type
      name
      shortDescription
      description
      price
      heroImage
      images
    }
  }
`;
