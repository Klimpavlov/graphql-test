'use client'
import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_GOOGLE_LOGIN_LINK } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/getGoogleLoginLink.js';
import { Button } from '@/components/ui/button';
import client from '/Users/a111/Desktop/graphql-test/graphql-test/src/lib/apolloClient.js';
import {useRouter, useSearchParams} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [getGoogleLoginLink, { data, loading, error }] = useLazyQuery(GET_GOOGLE_LOGIN_LINK, {
        variables: { platform: 'web' },
        client
    });

    const handleAuthorize = async () => {
        try {
            const result = await getGoogleLoginLink();
            if (result.data && result.data.getGoogleLoginLink) {
                window.location.href = result.data.getGoogleLoginLink.url;
            }
        } catch (error) {
            console.error('Error executing query:', error);
        }
    };

    // Conditionally render the loading or error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button variant="outline" onClick={handleAuthorize}>
                Authorize
            </Button>
        </main>
    );
}