'use client'

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_INFO } from '@/app/queries/getUserInfo.js';
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {RingLoader} from "react-spinners";


export default function UserSessions() {
    const accessToken = localStorage.getItem('accessToken')
    const { data, loading, error, refetch } = useQuery(GET_USER_INFO, {
        context: {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    });

    const [showSessions, setShowSessions] = useState(false);


    useEffect(() => {
        refetch();
    }, [refetch]);

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

    const handleToggleSessions = () => {
        setShowSessions(!showSessions);
    };

    return (
        <div>
            <Card className="border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">User Information</CardTitle>
                    <CardDescription className="text-xl">Details of the user account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><strong>Name:</strong> {data.getUserInfo.name}</p>
                    <p><strong>User ID:</strong> {data.getUserInfo.id}</p>
                    <p><strong>Email:</strong> {data.getUserInfo.email}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="lg" onClick={handleToggleSessions}>
                        {showSessions ? 'Hide Sessions' : 'Show Sessions'}
                    </Button>
                </CardFooter>
            </Card>

            {showSessions && (
                <div className="space-y-4">
                    {data.getUserInfo.sessions.map((session) => (
                        <Card key={session.sessionID} className="border border-gray-200">
                            <CardHeader>
                                <CardTitle>Session ID: {session.sessionID}</CardTitle>
                                <CardDescription>Platform: {session.platform}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Created At: {new Date(session.createdAt).toLocaleString()}</p>
                                {session.externalAccountId && (
                                    <p>External Account ID: {session.externalAccountId}</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
