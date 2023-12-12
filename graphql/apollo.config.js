import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://fab-api.onrender.com",
  cache: new InMemoryCache(),
});

export { client };
