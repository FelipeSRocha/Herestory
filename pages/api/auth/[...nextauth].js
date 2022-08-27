import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import Model from "../../../models/user_model";

export default NextAuth({
    providers: [
        CredentialsProvider({
            id:"credentials",
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                mongoose.connect(process.env.MONGODB_URL);
                const user = await Model.find({ user: credentials.user, password:credentials.password });
                if ( user.length >0) {
                    return {
                        id: 2,
                        name: credentials.user,
                    };
                }
                return null;
            },
        }),
    ],
    pages:{
        signIn: '/',
    }
    ,
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.id = token.id;
            }
            return session;
        },
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
});
