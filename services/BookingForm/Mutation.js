import { gql } from "@apollo/client";

export const SUBMIT_FORM_DATA = gql`
  mutation SubmitForm(
    $firstName: String
    $lastName: String
    $email: String
    $phoneNumber: String
    $address: String
  ) {
    submitForm(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      address: $address
    ) {
      success
      message
    }
  }
`;
