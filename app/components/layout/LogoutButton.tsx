'use client';
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    const onSignOut = () => {
        signOut({
            redirect: true
        });
    };

    return (
        <button className="anime-btn btn-dark" onClick={onSignOut}>
            Logout
        </button>
    );
}