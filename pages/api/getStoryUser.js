import Model from "../../models/story_model";
import mongoose from "mongoose";

//need to secure this API Route

export default async function getStoryUser(req,res){
    if (req.body.session) {
        const user = req.body.session.user.name;

        mongoose.connect(process.env.MONGODB_URL);
        const story_list = await Model.find({user: user});
        res.status(200).json({story_list: story_list})

    } else{
        res.status(401);
    }
}