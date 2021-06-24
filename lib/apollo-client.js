import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend.anticaosterialucca.it/graphql",
  cache: new InMemoryCache(),
});

export default client;
