'use client'
import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_GOOGLE_LOGIN_LINK } from '@/app/queries/getGoogleLoginLink.js';
import { Button } from '@/components/ui/button';
import client from '@/lib/apolloClient';
import {RingLoader} from "react-spinners";

export default function Home() {
    const [getGoogleLoginLink, { data, loading, error }] = useLazyQuery(GET_GOOGLE_LOGIN_LINK, {
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

    if (loading) return  <div className='flex items-center justify-center h-screen'>
        <RingLoader
            color={'#36d7b7'}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button variant="outline" onClick={handleAuthorize}>
                Authorize
            </Button>
        </main>
    );
}