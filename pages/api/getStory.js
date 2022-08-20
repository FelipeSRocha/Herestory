import Model from "../../models/story_model";
import mongoose from "mongoose";

//need to secure this API Route

export default async function getStoryUser(req,res){
    if (req.body.session && req.body.story_id) {
        const user = req.body.session.user.name;
        const story_id = req.body.story_id
        mongoose.connect(process.env.MONGODB_URL);
        const story_list = await Model.findOne({user: user, story_id: story_id});
        res.status(200).json({story_list: story_list})

    } else{
        res.status(401);
    }
}