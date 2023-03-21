import { useMutation } from "@apollo/client";
import { client } from "../graphql/apollo.config";
import { SUBMIT_FORM_DATA } from "./BookingForm/Mutation";
import { GET_LIST_OF_PRODUCTS } from "./Queries";

export function useGetListProducts() {
  const allProducts = client.query({
    query: GET_LIST_OF_PRODUCTS,
  });
  return allProducts;
}

// export const useSubmitFormApi = (
//   firstName,
//   lastName,
//   email,
//   phoneNumber,
//   address
// ) => {
//   try {
//     let submitForm = client.mutate({
//       mutation: SUBMIT_FORM_DATA,
//       variables: { firstName, lastName, email, phoneNumber, address },
//     });
//     return submitForm;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const useSubmitFormApi = () => {
  const [submitForm, { loading, error, data }] = useMutation(SUBMIT_FORM_DATA);
  return [submitForm, { loading, error, data }];
};
