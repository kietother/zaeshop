'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import OverlayLoading from "../layout/OverlayLoading";

export default function LoginButton() {
    const [isLoading, setIsLoading] = useState(false);

    const onSignIn = () => {
        setIsLoading(true);
        signIn('google');
    };

    return (
        <>
            {isLoading ? <OverlayLoading /> : <button className="hide-link" onClick={onSignIn}>
                <img src="assets/media/login/google.png" alt="" /> Continue with
                Google
            </button>}
        </>
    );
}