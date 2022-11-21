import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import { BodyWrapper, Footer, Header } from "../components";
import { store } from "../store";
import { apolloClient } from "../apollo";

const Home = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Header />
        <BodyWrapper />
        <Footer />
      </Provider>
    </ApolloProvider>
  );
};

export default Home;
