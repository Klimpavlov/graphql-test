'use client'
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CompleteGoogleSignIn() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const code = searchParams.get('code');
        if (code) {
            // Сохраните код в localStorage или отправьте его на сервер для обмена на токен
            localStorage.setItem('google_auth_code', code);
            console.log('Authorization code:', code);

            // Отправьте код на сервер для обмена на токен
            fetch('/api/auth/exchangeCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Token data:', data);
                    // Сохраните токен или перенаправьте пользователя на другую страницу
                    localStorage.setItem('access_token', data.accesstoken);
                    router.push('/someOtherPage'); // Перенаправление после успешной авторизации
                })
                .catch(error => console.error('Error exchanging code:', error));
        }
    }, [searchParams, router]);

    return (
        <div>
            <h1>Completing Google Sign In...</h1>
        </div>
    );
}
