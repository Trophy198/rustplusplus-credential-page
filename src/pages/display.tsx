import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Credentials {
    fcm_credentials: {
        fcm: {
            token: string;
            pushSet: string;
        };
        gcm: {
            token: string;
            androidId: string;
            securityToken: string;
            appId: string;
        };
        keys: {
            privateKey: string;
            publicKey: string;
            authSecret: string;
        };
    };
    expo_push_token: string;
    rustplus_auth_token: string;
    steamId: string;
}

const Display: NextPage = () => {
    const router = useRouter();
    const [formattedData, setFormattedData] = useState<string>('Loading configuration data...');

    useEffect(() => {
        const data = router.query.data as string;
        if (data) {
            const credentials: Credentials = JSON.parse(decodeURIComponent(data));
            const formatted = formatData(credentials);
            setFormattedData(formatted);
        } else {
            setFormattedData('No configuration data found.');
        }
    }, [router.query.data]);

    function formatData(credentials: Credentials): string {
        const { fcm_credentials, steamId } = credentials;
        const { fcm, gcm, keys } = fcm_credentials;
        return `/credentials add ` +
            `keys_private_key:${keys.privateKey} ` +
            `keys_public_key:${keys.publicKey} ` +
            `keys_auth_secret:${keys.authSecret} ` +
            `fcm_token:${fcm.token} ` +
            `fcm_push_set:${fcm.pushSet} ` +
            `gcm_token:${gcm.token} ` +
            `gcm_android_id:${gcm.androidId} ` +
            `gcm_security_token:${gcm.securityToken} ` +
            `gcm_app_id:${gcm.appId} ` +
            `steam_id:${steamId}`;
    }

    return (
        <div>
            <h1>Configuration Data</h1>
            <pre>{formattedData}</pre>
        </div>
    );
};

export default Display;
