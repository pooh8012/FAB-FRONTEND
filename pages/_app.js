import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo.config";
import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import RouteLoader from "../components/common/RouteLoader";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  // Router.events.on("routeChangeStart", (url) => {
  //   setLoading(true);
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   setLoading(false);
  // });

  return (
    <>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Head>
              <title>Fabricatlogy</title>
            </Head>
            <Navbar />
            {loading === true ? (
              <RouteLoader />
            ) : (
              <>
                <Component {...pageProps} />
              </>
            )}
            <Footer />
          </Provider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
