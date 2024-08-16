'use client'

import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_INFO } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/getUserInfo.js';

export default function UserSessions() {
    const accessToken = localStorage.getItem('accessToken')
    const { data, loading, error, refetch } = useQuery(GET_USER_INFO, {
        context: {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    const getUserSessions = async () => {
        console.log('Triggering query:', GET_USER_INFO);
        try {
            const result = await refetch(); // Refetch the query and wait for the result
            console.log('Query result:', result); // Log the full result object
            console.log('Data received:', data); // Log the data part of the result
        } catch (error) {
            console.error('Error executing query:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>User Sessions</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
