import { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 60 * 60 * 24 * 30, // 30 Days
    },
    callbacks: {
        async signIn({ user }) {
            console.log('googleId', user?.id);
            console.log('fullName', user?.name);
            console.log('email', user?.name);
            console.log('avatar', user?.image);
            return true;
        },
        async session({ session, token }) {
            session.user.token = token;
            return session;
        }
    }
};
