import {
  ApolloProvider as ApolloProviderOG,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const APOLLO_URI = "http://localhost:4000/graphql";

export default function ApolloProvider({ children }) {
  const client = new ApolloClient({
    uri: APOLLO_URI,
    cache: new InMemoryCache(),
  });

  return <ApolloProviderOG client={client}>{children}</ApolloProviderOG>;
}
