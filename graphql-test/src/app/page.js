'use client'

import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_GOOGLE_LOGIN_LINK } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/getGoogleLoginLink.js';
import { Button } from '@/components/ui/button';
import client from '/Users/a111/Desktop/graphql-test/graphql-test/src/lib/apolloClient.js';
import {useRouter} from "next/router";

export default function Home() {
    // `useLazyQuery` returns a tuple. The first item is the function to trigger the query.
    const [getGoogleLoginLink, { data, loading, error }] = useLazyQuery(GET_GOOGLE_LOGIN_LINK, {
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

    // const handleAuthorize = async () => {
    //     console.log('Triggering query:', GET_GOOGLE_LOGIN_LINK);
    //     console.log('Client instance:', client);
    //     try {
    //         const result = await getGoogleLoginLink(); // Trigger the query and wait for the result
    //         console.log('Query result:', result); // Log the full result object
    //         console.log('Data received:', data); // Log the data part of the result
    //
    //         if (data && data.getGoogleLoginLink) {
    //             console.log('Redirect URL:', data.getGoogleLoginLink.url); // Log the URL
    //
    //             // Перенаправление пользователя на URL Google для входа
    //             window.location.href = data.getGoogleLoginLink.url;
    //         }
    //     } catch (error) {
    //         console.error('Error executing query:', error);
    //     }
    // };



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


//
// 'use client'
//
// import React from 'react';
// import { useLazyQuery } from '@apollo/client';
// import { GET_GOOGLE_LOGIN_LINK } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/getGoogleLoginLink.js';
// import { Button } from '@/components/ui/button';
// import client from '/Users/a111/Desktop/graphql-test/graphql-test/src/lib/apolloClient.js';
//
// export default function Home() {
//     // `useLazyQuery` returns a tuple. The first item is the function to trigger the query.
//     const [getGoogleLoginLink, { data, loading, error }] = useLazyQuery(GET_GOOGLE_LOGIN_LINK, {
//         variables: { platform: 'web' },
//         client, // Pass the Apollo Client instance
//     });
//
//     const handleAuthorize = async () => {
//         try {
//             const { data } = await getGoogleLoginLink(); // Trigger the query and wait for the result
//             console.log('Response data:', data);
//             // Wait for the query to finish and then redirect
//             if (data && data.getGoogleLoginLink && data.getGoogleLoginLink.url) {
//                 window.location.href = data.getGoogleLoginLink.url;
//             }
//         } catch (err) {
//             console.error('Error executing query:', err);
//         }
//     };
//
//     // Conditionally render the loading or error states
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
//
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <Button variant="outline" onClick={handleAuthorize}>
//                 Authorize
//             </Button>
//         </main>
//     );
// }
