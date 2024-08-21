'use client'

import React, {useEffect, useState} from 'react';
import { useMutation } from '@apollo/client';
import { GOOGLE_LOGIN } from '/Users/a111/Desktop/graphql-test/graphql-test/src/app/queries/googleLogin';
import { Button } from '@/components/ui/button';
import {useRouter} from "next/navigation";
import {RingLoader} from "react-spinners";

export default function CompleteGoogleSignIn() {
    const router = useRouter()
    const [googleLogin, { data, loading, error }] = useMutation(GOOGLE_LOGIN);
    const [authCode, setAuthCode] = useState();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            console.log('Authorization code:', code);
            setAuthCode(code)
        } else {
            console.error('No authorization code found in URL');
        }
    }, [router]);

    console.log(authCode)

    const handleLogin = async () => {
        try {
            const { data } = await googleLogin({
                variables: {
                    code: authCode,
                    platform: "ios"
                }
            });
            console.log('Login successful:', data);
            if (data) {
                localStorage.setItem('accessToken', data.googleLogin.token.accessToken)
                router.push('/user/sessions')
            }
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

