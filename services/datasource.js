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



export const useSubmitFormApi = () => {
  const [submitForm, { loading, error, data }] = useMutation(SUBMIT_FORM_DATA);
  return [submitForm, { loading, error, data }];
};
