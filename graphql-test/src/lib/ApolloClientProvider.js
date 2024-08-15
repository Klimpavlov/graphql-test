'use client'; // This ensures that this component is treated as a client component

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';

export default function ApolloClientProvider({ children }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
