'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import GoogleLogo from '@/public/assets/media/login/google.png'

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
                <Image src={GoogleLogo} alt="google" priority width={52} height={33} />{t('continue_with_google')}
            </button>
        </>
    );
}