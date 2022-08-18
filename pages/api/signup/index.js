import Model from "../../../models/user_model";
import mongoose from "mongoose";
import cookie from "cookie";

export default async function handler(req, res) {
    mongoose.connect(process.env.MONGODB_URL);

    const user = await Model.find({ user: req.body.user });
    const token = "id" + Math.random().toString(16).slice(2);
    const data = {
        userToken: token,
        user: req.body.user,
        password: req.body.password,
    };
    if (user.length > 0) {
        // "existe"
        res.status(200).json({ signin: false });
    } else {
        // "Nao existe"
        try {
            const new_user = Model.create(data);
            new_user.then(data=>{
                const userToken = data.userToken;
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("token", userToken, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 60,
                        sameSite: "strict",
                        path: "/",
                    })
                );
                res.status(200);
                res.json({ signin: true });
                })
        } catch (err) {
            res.status(400).json({ status: "Not able to create a new User!" });
        }
    }
}
