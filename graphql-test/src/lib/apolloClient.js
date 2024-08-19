import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://sync-cal.maar.me/api/graphql/query',
    cache: new InMemoryCache()
});

export default client;