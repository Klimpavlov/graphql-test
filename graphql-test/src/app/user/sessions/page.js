'use client'

import React from 'react';
import {useQuery} from '@apollo/client';
import { GET_USER_INFO } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/getUserInfo.js';
import { Button } from '@/components/ui/button';
import client from '/Users/a111/Desktop/graphql-test/graphql-test/src/lib/apolloClient.js';
import {useRouter} from "next/router";

export default function Home() {
    // `useLazyQuery` returns a tuple. The first item is the function to trigger the query.
    const [getUserInfo, { data, loading, error }] = useQuery(GET_USER_INFO, {
        variables: { platform: 'web' },
        client, // Pass the Apollo Client instance
    });

    const handleAuthorize = async () => {
        console.log('Triggering query:', GET_GOOGLE_LOGIN_LINK);
        console.log('Client instance:', client);
        try {
            const result = await getGoogleLoginLink(); // Trigger the query and wait for the result
            console.log('Query result:', result); // Log the full result object
            console.log('Data received:', data); // Log the data part of the result
            // Wait for the query to finish and then redirect
            if (data && data.getGoogleLoginLink) {
                console.log('Redirect URL:', data.getGoogleLoginLink.url); // Log the URL
                window.location.href = data.getGoogleLoginLink.url;
                console.log(data)
            }
        } catch (error) {
            console.error('Error executing query:', error);
        }
    };