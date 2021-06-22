import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://anticaosterialucca.it/graphql",
  cache: new InMemoryCache(),
});

export default client;
