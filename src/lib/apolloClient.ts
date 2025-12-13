import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const defaultUrl = 'http://localhost:3000/graphql'

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT ?? defaultUrl,
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
