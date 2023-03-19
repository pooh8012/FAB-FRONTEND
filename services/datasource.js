import { client } from "../graphql/apollo.config";
import { SUBMIT_FORM_DATA } from "./BookingForm/Mutation";
import { GET_LIST_OF_PRODUCTS } from "./Queries";

export function useGetListProducts() {
  const allProducts = client.query({
    query: GET_LIST_OF_PRODUCTS,
  });
  return allProducts;
}

export const useFormDataSubmit = () => {
  const [submitForm, { loading, error, data }] = useMutation(SUBMIT_FORM_DATA);
  const formDataHandler = (
    firstName,
    lastName,
    email,
    phoneNumber,
    address
  ) => {
    formDataSubmitHandler({
      variables: {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
      },
    });
    return [formDataSubmitHandler, { loading, error, data, refetch }];
  };
};
