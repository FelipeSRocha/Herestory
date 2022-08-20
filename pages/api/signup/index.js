import UserModel from "../../../models/user_model";
import StoryModel from "../../../models/story_model";

import mongoose from "mongoose";
import cookie from "cookie";

export default async function handler(req, res) {
    mongoose.connect(process.env.MONGODB_URL);
    function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }
    const user = await UserModel.find({ user: req.body.user });
    const token = "id" + Math.random().toString(16).slice(2);
    const data = {
        userToken: token,
        user: req.body.user,
        password: req.body.password,
    };
    const firstStory = {
        title: "My first Story",
        text: "Once upon a time",
        user: req.body.user,
        story_id: uuid(),
    };
    function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }
    if (user.length > 0) {
        // "existe"
        res.status(200).json({ signin: false });
    } else {
        // "Nao existe"
        try {
            const new_user = UserModel.create(data);

            new_user.then((data) => {
                const new_story = StoryModel.create(firstStory);

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
                new_story.then(() => {
                    res.status(200);
                    res.json({ signin: true });
                });
            });
        } catch (err) {
            res.status(400).json({ status: "Not able to create a new User!" });
        }
    }
}
