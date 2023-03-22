import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo.config";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
