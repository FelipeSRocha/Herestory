import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
    user:{
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports =
    mongoose.models.StoryList || mongoose.model("StoryList", StorySchema);
