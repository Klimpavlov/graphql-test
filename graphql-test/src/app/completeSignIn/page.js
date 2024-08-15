'use client'

import React from 'react';
import { useMutation } from '@apollo/client';
import { GOOGLE_LOGIN } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/googleLogin';
import { Button } from '@/components/ui/button';
import client from "@/lib/apolloClient";

export default function CompleteSignIn() {
    const [googleLogin, { data, loading, error }] = useMutation(GOOGLE_LOGIN);

    const handleLogin = async () => {
        try {
            const { data } = await googleLogin({
                variables: {
                    code: "4/0AcvDMrAPgq0Q58ODvc3kRjH8e49mg3UdtzKjNKv9AYr5UV2AentcnFdeBt166Vpj1GAdFA",
                    platform: "ios"
                }
            });
            console.log('Login successful:', data);
            if (data) {
                localStorage.setItem('accessToken', data.token.accessToken)
            }
            // Здесь можете обработать ответ или выполнить перенаправление
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    // Показываем состояние загрузки и ошибок
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button variant="outline" onClick={handleLogin}>
                Log In
            </Button>
        </main>
    );
}

// 'use client';
//
// import React from 'react';
// import { gql, useLazyQuery } from '@apollo/client';
// import { Button } from '@/components/ui/button';
//
// // Define your query outside the component
// const GET_USER_INFO = gql`
//     query getUserInfo {
//         getUserInfo {
//             id
//             email
//             name
//             externalAccounts {
//                 id
//                 provider
//                 email
//                 name
//                 scopes
//             }
//             token {
//                 accessToken
//                 refreshToken
//                 tokenType
//             }
//             sessions {
//                 sessionID
//                 userID
//                 platform
//                 createdAt
//                 externalAccountId
//             }
//         }
//     }
// `;
//
// export default function CompleteSignIn() {
//     // Use `useLazyQuery` for queries that should be triggered by events
//     const [getUserInfo, { data, loading, error }] = useLazyQuery(GET_USER_INFO, {
//         context: {
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjM1ODA5OTAsImlhdCI6MTcyMzU3ODYzNiwidXNlcl9pZCI6ImIzMzgyMTkyLTlhODctNDFkNS04MDI5LTkzYjRlMmI3NWVjMyIsInNlc3Npb25faWQiOiI2OWMwZDUyOS0wZjJjLTQxNTYtYmYwOS04MTMzM2E3ZGMyYWYifQ.zdjWhPpwnkunmAzJB9uZrqngodBMsBH0ZalGFu78kAEFFa_j1Q-ySQ2fSPUaKXP60gh4l1z5vOGppzr01nbxCw"
//             },
//         },
//     });
//
//     const handleLogin = async () => {
//         try {
//             // Trigger the lazy query
//             await getUserInfo();
//             console.log('Login successful:', data);
//         } catch (error) {
//             console.error('Login error:', error);
//         }
//     };
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
//
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <Button variant="outline" onClick={handleLogin}>
//                 Log In
//             </Button>
//             {data && (
//                 <pre>{JSON.stringify(data, null, 2)}</pre>
//             )}
//         </main>
//     );
// }
//
//
