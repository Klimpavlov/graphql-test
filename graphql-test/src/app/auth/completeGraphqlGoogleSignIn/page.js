'use client'

import React from 'react';
import { useMutation } from '@apollo/client';
import { GOOGLE_LOGIN } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/googleLogin';
import { Button } from '@/components/ui/button';
import {useRouter} from "next/navigation";
import {RingLoader} from "react-spinners";

export default function CompleteGoogleSignIn() {
    const router = useRouter()
    const [googleLogin, { data, loading, error }] = useMutation(GOOGLE_LOGIN);
    const savedCode = localStorage.getItem('google_auth_code');
    console.log('Saved Google auth code:', savedCode);

    const handleLogin = async () => {
        try {
            const { data } = await googleLogin({
                variables: {
                    code: "4/0AQlEd8yMWAhYBWIg2m7oZWLqY6dAra-6c_sxKszBvC00YyWhe-hI2jFz8X2GU-pUNnj8Bw",
                    platform: "ios"
                }
            });
            console.log('Login successful:', data);
            if (data) {
                localStorage.setItem('accessToken', data.googleLogin.token.accessToken)
                router.push('/user/sessions')
            }
            // Здесь можете обработать ответ или выполнить перенаправление
        } catch (error) {
            console.error('Login error:', error);
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
            <Button variant="outline" onClick={handleLogin}>
                Log In
            </Button>
        </main>
    );
}

