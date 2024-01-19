'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function LoginButton() {
    const [isLoading, setIsLoading] = useState(false);
    const t = useTranslations('logins');
    const onSignIn = () => {
        setIsLoading(true);
        signIn('google');
    };

    return (
        <>
            {isLoading && <div id="overlay-loading"></div>}
            <button className="hide-link" onClick={onSignIn}>
                <img src="assets/media/login/google.png" alt="" />{t('continue_with_google')}
            </button>
        </>
    );
}