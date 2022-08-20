import Model from "../../models/story_model";
import mongoose from "mongoose";
import cookie from "cookie";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { getSession } from "next-auth/react";

//need to secure this API Route
export default async (req, res) => {
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

    if (req.body.session) {
        const user = req.body.session.user.name;

        mongoose.connect(process.env.MONGODB_URL);
        const data = { user: user, story_id: uuid() };
        const new_story = await Model.create(data);
        res.status(200).json({new_story: new_story})

    } else {
        res.status(401);
    }
};

// const user = await Model.find({ user: req.body.user });
