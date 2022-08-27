import Model from "../../models/story_model";
import mongoose from "mongoose";

export default async function getStoryUser(req,res){
    mongoose.connect(process.env.MONGODB_URL);
        const story_list = await Model.find({published: true})
        res.status(200).json({story_list: story_list})
}