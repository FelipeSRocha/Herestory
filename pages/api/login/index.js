import Model from "../../../models/user";
import mongoose from "mongoose";
import cookie from 'cookie'

export default async function handler(req, res) {
    mongoose.connect(process.env.MONGODB_URL);
    const user = await Model.find({ user: req.body.user, password: req.body.password });

    if (user.length > 0) {
        // "existe"
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("UserLogedIn", req.body.user,{
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60*60,
                sameSite: "strict",
                path:"/"
            })
        )
        res.status(200).json({ login: true });
    } else {
        // "Nao existe"
        res.status(200).json({ login: false });
    }
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.UserLogedIn || "" , } };
  }