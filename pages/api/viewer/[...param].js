import Model from "../../../models/story_model";
import mongoose from "mongoose";

const handler = async (req, res) => {
    mongoose.connect(process.env.MONGODB_URL);
    if (req.query.param[0] == "story" && req.query.user && req.query.story_id) {
        const user = req.query.user
        const story_id = req.query.story_id
        switch (req.method) {
            case "GET":
                const story_single = await Model.findOne({
                    user,
                    story_id,
                });
                res.status(200).json({story_single})

                break;

            case "POST":
                break;

            case "PUT":
                break;

            case "DELETE":
                break;
        }
    } else if (req.query.param[0] == "user" && req.query.user ){
        const user = req.query.user
        switch (req.method) {
            case "GET":
                console.log("get")
                const story_list = await Model.find({
                    user,
                    published: true
                });
                res.status(200).json({story_list})

                break;

            case "POST":
                break;

            case "PUT":
                break;

            case "DELETE":
                break;
        } 
    }

};
export default handler;
