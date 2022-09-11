import Model from "../../models/story_model";
import mongoose from "mongoose";

export default async function handler(req, res) {
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
    const newStory = {
        title: "My New Story",
        text: "Once upon a time...",
        user: req.body.user,
        story_id: uuid(),
    };

    if (req.body.user) {
        mongoose.connect(process.env.MONGODB_URL);
        const new_story = await Model.create(newStory).then(
            res.status(200).end()
        );
    } else {
        res.status(401);
        res.end();
    }
}
