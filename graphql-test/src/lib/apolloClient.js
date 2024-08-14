import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://sync-cal.maar.me/api/graphql/query',
    cache: new InMemoryCache()
});

export default client;

// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
//
// export const { client } = registerApolloClient(() => {
//     return new ApolloClient({
//         cache: new InMemoryCache(),
//         link: new HttpLink({
//             uri: "'https://sync-cal.maar.me/api/graphql/",
//         }),
//     });
// });