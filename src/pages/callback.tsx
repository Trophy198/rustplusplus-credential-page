import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CallbackPage: NextPage = () => {
    const router = useRouter();
    const { token, steamId } = router.query;

    useEffect(() => {
        if (typeof token === 'string' && typeof steamId === 'string') {
            fetch(`/api/callback?token=${encodeURIComponent(token)}&steamId=${encodeURIComponent(steamId)}`)
                .then((res) => {
                    if (res.redirected) {
                        window.location.href = res.url;
                    }
                })
                .catch((error) => {
                    console.error('Failed to process the callback:', error);
                });
        }
    }, [token, steamId]);

    return (
        <div>
            <h1>Processing your request...</h1>
            <p>Please wait a moment.</p>
        </div>
    );
};

export default CallbackPage;
