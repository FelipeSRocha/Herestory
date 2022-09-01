import Model from "../../models/story_model";
import mongoose from "mongoose";

//need to secure this API Route

export default async function getPublishedStoryUser(req, res) {
    mongoose.connect(process.env.MONGODB_URL);
    const story_list = await Model.find({ user: req.body.user, published: true });
    res.status(200).json({ story_list });
}
