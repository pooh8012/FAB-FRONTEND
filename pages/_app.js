import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
