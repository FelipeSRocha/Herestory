import Model from "../../models/story_model";
import mongoose from "mongoose";

//need to secure this API Route

export default async function getStoryUser(req,res){
    if (req.body.session) {
        mongoose.connect(process.env.MONGODB_URL);
        const update = await Model.findOneAndUpdate({story_id: req.body.story_id},
            {
                title:req.body.title,
                text:req.body.text,
                updatedAt:req.body.updatedAt, 
            }
            )
        console.log(update)

    } else{
        res.status(401);
    }
}