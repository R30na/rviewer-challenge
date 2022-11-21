import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: "/api/graphql",
  cache,
  connectToDevTools: true,
});
