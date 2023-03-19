import { gql } from "@apollo/client";

export const GET_LIST_OF_PRODUCTS = gql`
  query {
    getProduct {
      name
      shortDescription
      description
      price
      heroImage
      images
    }
  }
`;
