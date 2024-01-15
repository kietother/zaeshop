'use client';
import { signIn } from "next-auth/react";

export default function LoginButton() {
    const onSignIn = () => {
        signIn('google');
    };

    return (
        <button className="hide-link" onClick={onSignIn}>
            <img src="assets/media/login/google.png" alt="" /> Continue with
            Google
        </button>
    );
}