import Model from "../../models/story_model";
import mongoose from "mongoose";

export default async function getStoryUser(res) {
    mongoose.connect(process.env.MONGODB_URL);
    const story_list = await Model.find({ published: true });
    if (story_list.length > 0) {
        res.status(200).json({ story_list: story_list });
    } else {
        res.status(201).json({ story_list: story_list })
    }
}
