import Model from "../../models/story_model";
import mongoose from "mongoose";

export default async function handler(req,res){
    if (req.body.session && req.body.user) {
        console.log("if")
        mongoose.connect(process.env.MONGODB_URL);
        const new_story = await Model.deleteOne({story_id: req.body.story_id}).then(res.status(200).end())
    } else {
        res.status(401);
        res.end()

    }
}