'use client'

import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { GOOGLE_LOGIN } from '@/app/queries/googleLogin';
import { useRouter } from "next/navigation";
import { RingLoader } from "react-spinners";
import Cookies from 'js-cookie';


export default function CompleteGoogleSignIn() {
    const router = useRouter();
    const [googleLogin, { data, loading, error }] = useMutation(GOOGLE_LOGIN);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            console.log('Authorization code:', code);

            googleLogin({
                variables: {
                    code: code,
                    platform: "ios"
                }
            }).then(({ data }) => {
                console.log('Login successful:', data);
                if (data) {
                    // localStorage.setItem('accessToken', data.googleLogin.token.accessToken);
                    Cookies.set('accessToken', data.googleLogin.token.accessToken, { secure: true, sameSite: 'strict' });
                    router.push('/user/sessions');
                }
            }).catch(error => {
                console.error('Login error:', error);
            });
        } else {
            console.error('No authorization code found in URL');
        }
    }, [router, googleLogin]);

    if (loading) return (
        <div className='flex items-center justify-center h-screen'>
            <RingLoader
                color={'#36d7b7'}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );

    if (error) return <p>Error: {error.message}</p>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
    );
}

