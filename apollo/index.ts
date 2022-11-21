import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache,
  connectToDevTools: true,
});
